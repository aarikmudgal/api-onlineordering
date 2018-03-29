'use strict';

exports.__esModule = true;
exports.DCRuleChecklist = DCRuleChecklist;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DCRuleChecklist.css'); }

var _moduleClassNameFactory = require('../util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    visible: _propTypes2.default.bool,
    label: _propTypes2.default.string.isRequired,
    showErrors: _propTypes2.default.bool,
    rules: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string.isRequired,
        valid: _propTypes2.default.bool.isRequired
    })).isRequired
};

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-dcRuleChecklist');

function DCRuleChecklist(_ref) {
    var label = _ref.label,
        rules = _ref.rules,
        visible = _ref.visible,
        showErrors = _ref.showErrors;

    var cssClassNames = [moduleClassName()];

    if (visible) {
        cssClassNames.push(moduleClassName('visible'));
    }

    if (showErrors) {
        cssClassNames.push(moduleClassName('showErrors'));
    }

    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(cssClassNames) },
        _react2.default.createElement(
            'div',
            { className: moduleClassName('content') },
            label,
            _react2.default.createElement(
                'ul',
                { className: moduleClassName('list') },
                rules.map(function (rule) {
                    return _react2.default.createElement(
                        'li',
                        {
                            key: rule.label,
                            className: (0, _classnames2.default)(moduleClassName('item'), rule.valid ? moduleClassName('itemValid') : undefined)
                        },
                        _react2.default.createElement('div', { className: moduleClassName('icon') }),
                        rule.label
                    );
                })
            )
        )
    );
}

DCRuleChecklist.propTypes = propTypes;