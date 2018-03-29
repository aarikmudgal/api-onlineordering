'use strict';

exports.__esModule = true;
exports.default = Page;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Page.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-page');

function Page(_ref) {
    var className = _ref.className,
        children = _ref.children,
        grey = _ref.grey,
        lightBlue = _ref.lightBlue;

    var cssClasses = ['m-page', className];

    if (grey) {
        cssClasses.push('m-page--grey');
    } else if (lightBlue) {
        cssClasses.push('m-page--lightBlue');
    }

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(cssClasses) },
        children
    );
}

Page.propTypes = {
    className: _propTypes2.default.string,
    lightBlue: _propTypes2.default.bool,
    grey: _propTypes2.default.bool
};

Page.Content = function PageContent(_ref2) {
    var centered = _ref2.centered,
        children = _ref2.children,
        className = _ref2.className;

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('container'), className, centered && moduleClassName('container-isCentered')) },
        children
    );
};

Page.Content.propTypes = {
    centered: _propTypes2.default.bool
};
Page.Content.displayName = 'Page.Content';