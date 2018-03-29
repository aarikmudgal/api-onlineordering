'use strict';

exports.__esModule = true;
exports.default = ChoiceList;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ChoiceList.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-choiceList');

function ChoiceList(_ref) {
    var title = _ref.title,
        children = _ref.children,
        compact = _ref.compact,
        bordered = _ref.bordered,
        noHover = _ref.noHover;

    return _react2.default.createElement(
        'ul',
        { className: (0, _classnames2.default)(moduleClassName(), compact && moduleClassName('compact'), bordered && moduleClassName('bordered'), noHover && moduleClassName('noHover')) },
        !!title && _react2.default.createElement(
            'li',
            { key: 'choiceList-header', className: moduleClassName('header') },
            title
        ),
        children
    );
}

ChoiceList.propTypes = {
    title: _propTypes2.default.string,
    compact: _propTypes2.default.bool,
    noHover: _propTypes2.default.bool,
    bordered: _propTypes2.default.bool
};

ChoiceList.Link = function (_ref2) {
    var children = _ref2.children,
        selected = _ref2.selected,
        onClick = _ref2.onClick;

    return _react2.default.createElement(
        'li',
        {
            className: (0, _classnames2.default)(moduleClassName('linkItem'), selected && moduleClassName('linkItem-isSelected'))
        },
        _react2.default.createElement(
            'a',
            { className: moduleClassName('link'), role: 'button', onClick: onClick },
            children
        )
    );
};

ChoiceList.Link.displayName = 'ChoiceList.Link';
ChoiceList.Link.propTypes = {
    onClick: _propTypes2.default.func,
    selected: _propTypes2.default.bool
};