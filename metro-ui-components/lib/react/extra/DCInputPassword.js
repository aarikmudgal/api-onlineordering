'use strict';

exports.__esModule = true;
exports.DCInputPassword = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _DCInputBase = require('./DCInputBase');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prop-types */

var DCInputPassword = exports.DCInputPassword = function (_Component) {
    _inherits(DCInputPassword, _Component);

    function DCInputPassword(props) {
        _classCallCheck(this, DCInputPassword);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            type: 'password'
        };


        _this.handlePasswordToggle = _this.handlePasswordToggle.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        return _this;
    }

    DCInputPassword.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.resetStateAfterBlur);
    };

    DCInputPassword.prototype.handlePasswordToggle = function handlePasswordToggle(e) {
        e.preventDefault();

        clearTimeout(this.resetStateAfterBlur);

        this.setState({
            type: this.state.type === 'text' ? 'password' : 'text'
        });
    };

    DCInputPassword.prototype.handleBlur = function handleBlur() {
        var _this2 = this;

        this.resetStateAfterBlur = setTimeout(function () {
            return _this2.setState({
                type: 'password'
            });
        }, 100);

        if (this.props.onBlur) {
            var _props;

            (_props = this.props).onBlur.apply(_props, arguments);
        }
    };

    DCInputPassword.prototype.render = function render() {
        var _props2 = this.props,
            inputClassName = _props2.inputClassName,
            type = _props2.type,
            props = _objectWithoutProperties(_props2, ['inputClassName', 'type']); // eslint-disable-line react/prop-types

        return _react2.default.createElement(_DCInputBase.DCInputBase, _extends({}, props, {
            type: this.state.type,
            inputClassName: (0, _classnames2.default)(inputClassName),
            onBlur: this.handleBlur,
            iconType: this.state.type === 'password' ? 'show' : 'hide',
            onIconClick: this.handlePasswordToggle
        }));
    };

    return DCInputPassword;
}(_react.Component);

DCInputPassword.displayName = 'DCInput.Password';
DCInputPassword.propTypes = _DCInputBase.DCInputBase.propTypes;
DCInputPassword.defaultProps = (0, _objectAssign2.default)({}, _DCInputBase.DCInputBase.defaultProps, {
    type: 'password'
});
DCInputPassword.HIDE_PASSWORD_AFTER_TOUCH = 2000;