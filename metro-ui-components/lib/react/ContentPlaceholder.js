'use strict';

exports.__esModule = true;
exports.default = ContentPlaceholder;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ContentPlaceholder.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-contentPlaceholder');

var getStyleByRatio = function getStyleByRatio(ratio) {
    return ratio === 'auto' ? null : {
        paddingTop: ratio * 100 + '%',
        height: 0
    };
};

var wrapChildren = function wrapChildren(children) {
    return _react2.default.createElement(
        'div',
        { className: moduleClassName('content') },
        _react2.default.createElement(
            'div',
            null,
            children
        )
    );
};

function ContentPlaceholder(_ref) {
    var ratio = _ref.ratio,
        children = _ref.children,
        className = _ref.className;

    return _react2.default.createElement(
        'div',
        {
            className: (0, _classnames2.default)(moduleClassName(), className),
            style: getStyleByRatio(ratio)
        },
        ratio === 'auto' ? wrapChildren(children) : _react2.default.createElement(
            'div',
            { className: moduleClassName('contentWrapper') },
            wrapChildren(children)
        )
    );
}

ContentPlaceholder.propTypes = {
    ratio: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['auto']), _propTypes2.default.number])
};