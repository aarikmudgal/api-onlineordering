'use strict';

exports.__esModule = true;
exports.default = Spinner;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Spinner.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    className: _propTypes2.default.string
};

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-spinner');

function Spinner(_ref) {
    var className = _ref.className;

    var cssClassNames = [moduleClassName(), className];

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(cssClassNames) },
        _react2.default.createElement(
            'svg',
            { className: moduleClassName('svg'), viewBox: '25 25 50 50' },
            _react2.default.createElement('circle', {
                className: moduleClassName('path'),
                cx: '50',
                cy: '50',
                r: '20',
                fill: 'none',
                strokeWidth: '1',
                strokeMiterlimit: '10'
            })
        )
    );
}

Spinner.propTypes = propTypes;