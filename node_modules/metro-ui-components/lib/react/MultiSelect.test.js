'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _MultiSelect = require('./MultiSelect');

var _MultiSelect2 = _interopRequireDefault(_MultiSelect);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = void 0;
var wrapper = void 0;

var options = [1, 2, 3, 4, 5].map(function (val) {
    return {
        name: 'name' + val,
        id: 'id' + val,
        value: val % 2 === 0,
        disabled: val % 3 === 0,
        label: 'label' + val
    };
});

describe('MultiSelect', function () {
    // eslint-disable-line max-statements
    beforeEach(function () {
        defaultProps = {
            label: 'Label',
            placeholder: 'Placeholder',
            name: 'name',
            onChange: jest.fn(),
            options: options
        };
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_MultiSelect2.default, defaultProps));
    });

    it('renders a label', function () {
        expect(wrapper.find(_Label2.default).props().label).toBe(defaultProps.label);
    });

    it('gives its button the name as an id', function () {
        expect(wrapper.find('button').props().id).toBe(defaultProps.name);
    });

    it('does not render options at first', function () {
        expect(wrapper.find(_Checkbox2.default).length).toBe(0);
    });

    it('shows options after click on button', function () {
        var button = wrapper.find('button');

        button.simulate('click');

        expect(wrapper.find(_Checkbox2.default).length).toBe(options.length);
    });

    ['isValid', 'hasInfo', 'hasWarning'].forEach(function (name) {
        it('handles ' + name + ' state', function () {
            var _extends2;

            var props = _extends({}, defaultProps, (_extends2 = {}, _extends2[name] = true, _extends2));

            wrapper = (0, _enzyme.mount)(_react2.default.createElement(_MultiSelect2.default, props));

            expect(wrapper.find('.m-multiSelect-' + name).length).toBe(1);
        });
    });

    describe('with options visible', function () {
        var button = void 0;
        var optionNodes = void 0;
        var onChangeEventMock = void 0;

        beforeEach(function () {
            button = wrapper.find('button');
            button.simulate('click');
            optionNodes = wrapper.find(_Checkbox2.default);
            onChangeEventMock = {
                target: {
                    checked: true,
                    blur: jest.fn()
                }
            };
        });

        it('option click triggers onChange', function () {
            var secondOption = optionNodes.at(1);

            secondOption.find('input').simulate('change', onChangeEventMock);

            expect(defaultProps.onChange.mock.calls.length).toBe(1);
        });

        it('should add disable attribute to disabled options', function () {
            var disabledOption = optionNodes.at(2);

            expect(disabledOption.find('input').props().disabled).toBe(true);
        });
    });
});