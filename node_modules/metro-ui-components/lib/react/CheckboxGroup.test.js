'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckboxGroup = require('./CheckboxGroup');

var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CheckboxGroup', function () {
    describe('label', function () {
        it('renders when needed', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroup2.default, { label: 'My Label' }));

            expect(wrapper.find(_Label2.default).props().label).toBe('My Label');
        });

        it('does not render when not needed', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroup2.default, null));

            expect(wrapper.find(_Label2.default).length).toBe(0);
        });
    });

    it('renders its children', function () {
        var noop = function noop() {};
        var childrenCount = 12;
        var cbxs = '.'.repeat(childrenCount).split('');
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _CheckboxGroup2.default,
            { label: 'My Label' },
            cbxs.map(function (cb, index) {
                return _react2.default.createElement(_Checkbox2.default, { key: index, name: 'name' + index, id: 'name' + index, onChange: noop });
            })
        ));

        expect(wrapper.find('.m-checkboxGroup-content').children().length).toBe(childrenCount);
    });
});