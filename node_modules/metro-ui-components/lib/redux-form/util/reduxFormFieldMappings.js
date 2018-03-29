"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var mapInputBaseProps = function mapInputBaseProps(_ref) {
    var input = _ref.input,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        invalid = _ref$meta.invalid,
        error = _ref$meta.error,
        restProps = _objectWithoutProperties(_ref, ["input", "meta"]);

    return _extends({}, input, {
        errorMessage: touched ? error : undefined,
        hasWarning: invalid && touched,
        onChange: function onChange(event, value) {
            return input.onChange(value);
        }
    }, restProps);
};

exports.mapInputBaseProps = mapInputBaseProps;
var mapToggleButtonProps = function mapToggleButtonProps(_ref2) {
    var input = _ref2.input,
        _ref2$meta = _ref2.meta,
        touched = _ref2$meta.touched,
        error = _ref2$meta.error,
        restProps = _objectWithoutProperties(_ref2, ["input", "meta"]);

    return _extends({}, input, {
        errorMessage: touched ? error : undefined,
        onChange: function onChange(event, value) {
            return input.onChange(value);
        }
    }, restProps);
};

exports.mapToggleButtonProps = mapToggleButtonProps;
var mapButtonBarProps = function mapButtonBarProps(_ref3) {
    var input = _ref3.input,
        meta = _ref3.meta,
        restProps = _objectWithoutProperties(_ref3, ["input", "meta"]);

    return _extends({}, input, {
        onChange: function onChange(event, value) {
            return input.onChange(value);
        }
    }, restProps);
};
exports.mapButtonBarProps = mapButtonBarProps;