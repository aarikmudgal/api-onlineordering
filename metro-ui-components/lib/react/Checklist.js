'use strict';

exports.__esModule = true;
exports.default = Checklist;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Checklist.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-checklist');

function Checklist(_ref) {
    var title = _ref.title,
        children = _ref.children,
        highlighted = _ref.highlighted,
        className = _ref.className;

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName(), highlighted && moduleClassName('isHighlighted'), className) },
        _react2.default.createElement(
            'div',
            { className: moduleClassName('title') },
            title
        ),
        _react2.default.createElement(
            'ul',
            { className: moduleClassName('ul') },
            children
        )
    );
}
Checklist.propTypes = {
    title: _propTypes2.default.node,
    highlighted: _propTypes2.default.bool
};

var ChecklistItem = function ChecklistItem(_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
        'li',
        { className: moduleClassName('item') },
        _react2.default.createElement(_Icon2.default, { type: 'check-small', className: moduleClassName('item-icon') }),
        children
    );
};

Checklist.Item = ChecklistItem;