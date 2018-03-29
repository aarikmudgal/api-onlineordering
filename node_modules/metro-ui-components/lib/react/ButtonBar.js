'use strict';

exports.__esModule = true;
exports.default = ButtonBar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('fbjs/lib/warning');

var _warning2 = _interopRequireDefault(_warning);

var _SegmentedControl = require('./SegmentedControl');

var _SegmentedControl2 = _interopRequireDefault(_SegmentedControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonBar(props) {
    (0, _warning2.default)(false, 'ButtonBar has been renamed to SegmentedControl');

    return _react2.default.createElement(_SegmentedControl2.default, props);
}