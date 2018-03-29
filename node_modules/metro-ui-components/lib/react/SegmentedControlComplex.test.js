'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SegmentedControlComplex = require('./SegmentedControlComplex');

var _SegmentedControlComplex2 = _interopRequireDefault(_SegmentedControlComplex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SegmentedControlComplex', function () {
    // eslint-disable-line max-statements

    it('sets active button', function () {
        var onChangeHandler = jest.fn();
        var control = (0, _enzyme.shallow)(_react2.default.createElement(
            _SegmentedControlComplex2.default,
            {
                onChange: onChangeHandler,
                value: 'one'
            },
            _react2.default.createElement(
                _SegmentedControlComplex2.default.Option,
                { name: 'one' },
                'Option one'
            ),
            _react2.default.createElement(
                _SegmentedControlComplex2.default.Option,
                { name: 'two' },
                'Option two'
            )
        ));

        expect(control.find({ active: true }).contains('Option one')).toBe(true);
    });

    it('calls onChange when option is clicked', function () {
        var onChangeHandler = jest.fn();
        var control = (0, _enzyme.shallow)(_react2.default.createElement(
            _SegmentedControlComplex2.default,
            {
                onChange: onChangeHandler,
                value: 'one'
            },
            _react2.default.createElement(
                _SegmentedControlComplex2.default.Option,
                { name: 'one' },
                'Option one'
            ),
            _react2.default.createElement(
                _SegmentedControlComplex2.default.Option,
                { name: 'two' },
                'Option two'
            )
        ));

        control.find({ active: false }).simulate('click');

        expect(onChangeHandler.mock.calls.length).toBe(1);
        expect(onChangeHandler.mock.calls[0][0]).toBe('two');
    });
});