'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    name: 'test',
    id: 'test',
    maxLength: 10,
    type: 'text',
    value: ''
};

describe('Input.ShortCode', function () {
    // eslint-disable-line max-statements
    it('renders placeholder chars', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.ShortCode, defaultProps));
        var placeholders = wrapper.find('span.m-inputShortCode-char');

        expect(placeholders.length).toBe(defaultProps.maxLength - 1);
    });

    it('renders an input', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.ShortCode, defaultProps));
        var input = wrapper.find('input.m-inputShortCode-char');

        expect(input.length).toBe(1);
    });

    it('inserts characters', function () {
        var value = 'B3781';
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.ShortCode, _extends({}, defaultProps, {
            value: value
        })));
        var placeholders = wrapper.find('span.m-inputShortCode-char');

        placeholders.forEach(function (placeholder, index) {
            expect(placeholder.props().children).toBe(value[index]);
        });
    });

    it('when full code visible, renders last char as input', function () {
        var value = '0123456789';
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.ShortCode, _extends({}, defaultProps, {
            value: value
        })));
        var input = wrapper.find('input.m-inputShortCode-char');

        expect(input.props().value).toBe(value.substr(-1));
    });

    it('replaces all text on paste', function () {
        var initialValue = '01234567';
        var pastedValue = 'abcdefghijklmno';
        var onChange = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.ShortCode, _extends({}, defaultProps, {
            onChange: onChange,
            value: initialValue
        })));
        var input = wrapper.find('input.m-inputShortCode-char');
        var eventMock = {
            preventDefault: jest.fn(),
            clipboardData: {
                getData: jest.fn().mockReturnValue(pastedValue)
            }
        };

        input.simulate('paste', eventMock);

        expect(eventMock.preventDefault.mock.calls.length).toBe(1);
        expect(onChange.mock.calls.length).toBe(1);
        expect(onChange.mock.calls[0][1]).toBe(pastedValue.substr(0, defaultProps.maxLength));
    });

    it('deletes char via backspace', function () {
        var initialValue = '01234567';
        var onChange = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.ShortCode, _extends({}, defaultProps, {
            onChange: onChange,
            value: initialValue
        })));
        var input = wrapper.find('input.m-inputShortCode-char');
        var eventMock = { keyCode: 8 };

        input.simulate('keyDown', eventMock);

        expect(onChange.mock.calls.length).toBe(1);
        expect(onChange.mock.calls[0][1]).toBe(initialValue.substr(0, initialValue.length - 1));
    });

    it('deletes all chars via alt + backspace', function () {
        var initialValue = '01234567';
        var onChange = jest.fn();
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.ShortCode, _extends({}, defaultProps, {
            onChange: onChange,
            value: initialValue
        })));
        var input = wrapper.find('input.m-inputShortCode-char');
        var eventMock = { altKey: true, keyCode: 8 };

        input.simulate('keyDown', eventMock);

        expect(onChange.mock.calls.length).toBe(1);
        expect(onChange.mock.calls[0][1]).toBe('');
    });
});