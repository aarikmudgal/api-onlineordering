'use strict';

exports.__esModule = true;
exports.default = LabelList;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./LabelList.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-labelList');

function LabelList(_ref) {
    var children = _ref.children,
        className = _ref.className;

    return _react2.default.createElement(
        'ul',
        { className: (0, _classnames2.default)(moduleClassName(), className) },
        children
    );
}

LabelList.propTypes = {
    className: _propTypes2.default.string
};

LabelList.Label = function LabelListLabel(_ref2) {
    var children = _ref2.children,
        className = _ref2.className;

    return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)(moduleClassName('label'), className) },
        children
    );
};

LabelList.Label.propTypes = {
    className: _propTypes2.default.string
};

LabelList.Item = function LabelListItem(_ref3) {
    var children = _ref3.children,
        className = _ref3.className;

    return _react2.default.createElement(
        'li',
        { className: (0, _classnames2.default)(moduleClassName('item'), className) },
        children
    );
};

LabelList.Item.propTypes = {
    className: _propTypes2.default.string
};

LabelList.Item.displayName = 'LabelList.Item';

LabelList.Link = function LabelListLink(_ref4) {
    var children = _ref4.children,
        muted = _ref4.muted,
        props = _objectWithoutProperties(_ref4, ['children', 'muted']);

    return _react2.default.createElement(
        'li',
        {
            className: (0, _classnames2.default)(moduleClassName('item'), moduleClassName('link'), muted && moduleClassName('isMuted'))
        },
        _react2.default.createElement(
            'a',
            props,
            children
        )
    );
};