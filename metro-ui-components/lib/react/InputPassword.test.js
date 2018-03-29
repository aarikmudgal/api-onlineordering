'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    name: 'test',
    id: 'test',
    label: 'Test label',
    value: 'val'
};

describe('Input.Password', function () {
    // eslint-disable-line max-statements
    it('has renders password visibility toggle', function () {
        var input = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.Password, defaultProps));
        var passwordToggleLink = input.find('.m-input-iconLink');

        expect(passwordToggleLink.length).toBe(1);
    });

    it('toggles password visibility', function () {
        var input = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.Password, defaultProps));
        var passwordToggleLink = input.find('.m-input-iconLink');
        var preventDefault = jest.fn();

        expect(passwordToggleLink.find(_Icon2.default).props().type).toBe('show');

        passwordToggleLink.simulate('click', {
            preventDefault: preventDefault
        });

        input.instance().forceUpdate();
        input.update();

        expect(preventDefault.mock.calls.length).toBe(1);
        expect(input.find('.m-input-iconLink').find(_Icon2.default).props().type).toBe('hide');
    });

    it('does not render visibility toggle for readOnly fields', function () {
        var input = (0, _enzyme.mount)(_react2.default.createElement(_Input2.default.Password, _extends({
            readOnly: true
        }, defaultProps)));
        var passwordToggleLink = input.find('.m-input-iconLink');

        expect(passwordToggleLink.length).toBe(0);
    });
});