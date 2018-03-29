'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputBase = require('./InputBase');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    name: 'test',
    id: 'test',
    label: 'Test label',
    value: 'val'
};

var shallowInput = function shallowInput() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _enzyme.shallow)(_react2.default.createElement(_Input2.default, _extends({
        type: 'text'
    }, defaultProps, props)));
};

describe('Input', function () {
    // eslint-disable-line max-statements
    it('has controlled value', function () {
        var input = shallowInput();

        expect(input.find('#test').props().value).toEqual('val');

        input.setProps({ value: 'value' });

        expect(input.find('#test').props().value).toEqual('value');
    });

    it('renders its children', function () {
        var input = shallowInput({
            children: _react2.default.createElement(
                'h2',
                { id: 'h2' },
                'Hey h2'
            )
        });

        expect(input.find('#h2').length).toBe(1);
    });

    it('renders a lock icon if it is readonly', function () {
        var input = shallowInput({
            readOnly: true
        });
        var icon = input.find(_Icon2.default);

        expect(icon.length).toBe(1);
        expect(icon.props().type).toBe('lock');
    });

    it('allows rendering of a custom input element', function () {
        var input = shallowInput({
            renderInput: function renderInput(props) {
                return _react2.default.createElement('select', _extends({}, props, { id: 'my-custom-select' }));
            }
        });

        expect(input.find('#my-custom-select').length).toBe(1);
    });

    it('renders an errorMessage', function () {
        var input = shallowInput({
            errorMessage: 'Thats an error'
        });

        expect(input.find(_InputBase.ErrorMessage).length).toBe(1);
    });

    it('adds inputClassName to the input element', function () {
        var input = shallowInput({
            inputClassName: 'custom-input-element-class'
        });
        var inputElement = input.find('input');

        expect(inputElement.props().className).toContain('custom-input-element-class');
    });

    it('mutates the value emitted for onChange with onBeforeChange', function () {
        var onChangeMock = jest.fn();
        var input = shallowInput({
            onChange: onChangeMock,
            onBeforeChange: function onBeforeChange(value) {
                return 'custom-' + value;
            }
        });
        var inputElement = input.find('input');
        var event = { target: { value: 'value' } };

        inputElement.simulate('change', event);

        expect(onChangeMock.mock.calls.length).toBe(1);
        expect(onChangeMock.mock.calls[0][0]).toBe(event);
        expect(onChangeMock.mock.calls[0][1]).toBe('custom-value');
    });

    it('forwards props to actual input element', function () {
        var inputElementProps = {
            id: 'test-id',
            type: 'tel',
            name: 'name',
            placeholder: 'placeholder',
            disabled: true,
            readOnly: true,
            autoCorrect: 'autoCorrect',
            autoCapitalize: 'autoCapitalize',
            defaultValue: 'defaultValue',
            value: 'value'
        };

        var expectedElementProps = _extends({}, inputElementProps, {
            readOnly: 'readOnly'
        });

        var input = shallowInput(_extends({
            label: 'Test label'
        }, inputElementProps));

        expect(input.find('#test-id').props()).toMatchObject(expectedElementProps);
    });

    var eventHandlerTest = function eventHandlerTest(eventName, eventHandlerName, value) {
        it('handles ' + eventHandlerName, function () {
            var _shallowInput;

            var handlerMock = jest.fn();
            var wrapper = shallowInput((_shallowInput = {
                id: 'test-id',
                name: 'name',
                label: 'label'
            }, _shallowInput[eventHandlerName] = handlerMock, _shallowInput));
            var eventMock = { target: { value: value } };
            var input = wrapper.find('input.m-input-element');

            input.simulate(eventName, eventMock);

            expect(handlerMock.mock.calls.length).toBe(1);

            if (value) {
                expect(handlerMock.mock.calls[0][0]).toBe(eventMock);
                expect(handlerMock.mock.calls[0][1]).toBe(value);
            }
        });
    };

    eventHandlerTest('change', 'onChange', 'look a string');
    eventHandlerTest('blur', 'onBlur', 'look a string');
    eventHandlerTest('focus', 'onFocus', 'look a string');
    eventHandlerTest('keyup', 'onKeyUp', 'look a string');
    eventHandlerTest('keydown', 'onKeyDown', 'look a string');
    eventHandlerTest('mouseleave', 'onMouseLeave');
    eventHandlerTest('mouseenter', 'onMouseEnter');
    eventHandlerTest('touchstart', 'onTouchStart');
});