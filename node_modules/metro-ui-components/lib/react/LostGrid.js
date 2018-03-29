'use strict';

exports.__esModule = true;
exports.SingleColumn = exports.ThreeQuarters = exports.Quarter = exports.Half = exports.Full = exports.Vertical = exports.Row = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneClassComponentFactory = function oneClassComponentFactory(className, componentName) {
    var Component = function Component(_ref) {
        var children = _ref.children;
        return _react2.default.createElement(
            'div',
            { className: className },
            children
        );
    };

    Component.displayName = 'LostGrid.' + componentName;

    return Component;
};

var Row = exports.Row = oneClassComponentFactory('row', 'Row');

var Vertical = exports.Vertical = oneClassComponentFactory('vertical', 'Vertical');

var Full = exports.Full = oneClassComponentFactory('full', 'Full');
var Half = exports.Half = oneClassComponentFactory('half', 'Half');
var Quarter = exports.Quarter = oneClassComponentFactory('quarter', 'Quarter');
var ThreeQuarters = exports.ThreeQuarters = oneClassComponentFactory('three-quarters', 'ThreeQuarters');
var SingleColumn = exports.SingleColumn = oneClassComponentFactory('singleColumn', 'SingleColumn');

exports.default = {
    Row: Row,
    Vertical: Vertical,
    Quarter: Quarter,
    ThreeQuarters: ThreeQuarters,
    SingleColumn: SingleColumn,
    Half: Half,
    Full: Full
};