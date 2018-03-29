'use strict';

exports.__esModule = true;
exports.default = StepProgress;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./StepProgress.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-stepProgress');

function StepProgress(_ref) {
    var current = _ref.current,
        total = _ref.total;

    // Progress must be between 0 and 100
    var progress = Math.max(0, Math.min(100, 100 / total * current));
    var indicatorWidth = (1 - (current - 1) / total * 100 / progress) * 100;

    return _react2.default.createElement(
        'div',
        { className: moduleClassName() },
        _react2.default.createElement(
            'div',
            { className: moduleClassName('inner'), style: { width: progress + '%' } },
            _react2.default.createElement('div', {
                className: moduleClassName('active'),
                style: { width: indicatorWidth + '%' }
            })
        )
    );
}

StepProgress.propTypes = {
    current: _propTypes2.default.number,
    total: _propTypes2.default.number
};