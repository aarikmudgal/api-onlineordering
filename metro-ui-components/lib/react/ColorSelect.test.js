'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ColorSelect = require('./ColorSelect');

var _ColorSelect2 = _interopRequireDefault(_ColorSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ColorSelect', function () {
    var defaultProps = {
        label: 'Select color',
        colors: ['#f00', '#0f0', '#00f'],
        onChange: jest.fn()
    };

    beforeEach(function () {
        defaultProps.onChange.mockReset();
    });

    it('renders without breaking', function () {
        var renderWrapper = function renderWrapper() {
            return (0, _enzyme.mount)(_react2.default.createElement(_ColorSelect2.default, defaultProps));
        };

        expect(renderWrapper).not.toThrow();
    });

    it('renders its label', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ColorSelect2.default, defaultProps));

        expect(wrapper.find('label').text()).toBe(defaultProps.label);
    });

    it('renders a button per color', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ColorSelect2.default, defaultProps));

        expect(wrapper.find('button').length).toBe(defaultProps.colors.length);
    });

    it('renders all buttons with background-color', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ColorSelect2.default, defaultProps));

        defaultProps.colors.forEach(function (color, index) {
            expect(wrapper.find('button').get(index).props.style.backgroundColor).toBe(color);
        });
    });

    it('calls onChange when a color button was clicked', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ColorSelect2.default, defaultProps));

        defaultProps.colors.forEach(function (color, index) {
            wrapper.find('button').at(index).simulate('click');

            expect(defaultProps.onChange.mock.calls.length).toBe(index + 1);
            expect(defaultProps.onChange.mock.calls[index][0]).toBe(color);
        });
    });

    it('sets aria-selected on the color buttons based on its value', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ColorSelect2.default, _extends({}, defaultProps, { value: defaultProps.colors[1] })));

        defaultProps.colors.forEach(function (color, index) {
            if (index === 1) {
                expect(wrapper.find('button').at(index).props().className).toContain('m-colorSelect-option-isSelected');
                expect(wrapper.find('button').at(index).props()['aria-selected']).toBe(true);
            } else {
                expect(wrapper.find('button').at(index).props().className).not.toContain('.m-colorSelect-option-isSelected');
                expect(wrapper.find('button').at(index).props()['aria-selected']).toBe(false);
            }
        });
    });
});