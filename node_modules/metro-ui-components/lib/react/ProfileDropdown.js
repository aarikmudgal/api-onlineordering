'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OutsideClick = require('./util/OutsideClick');

var _OutsideClick2 = _interopRequireDefault(_OutsideClick);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ProfileDropdown.css'); }

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('profileDropdown');

var ProfileDropdown = function (_Component) {
    _inherits(ProfileDropdown, _Component);

    function ProfileDropdown(props) {
        _classCallCheck(this, ProfileDropdown);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            active: false
        };


        _this.handleIconClick = _this.handleIconClick.bind(_this);
        _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
        return _this;
    }

    ProfileDropdown.prototype.handleIconClick = function handleIconClick(e) {
        e.preventDefault();

        this.setState({
            active: !this.state.active
        });
    };

    ProfileDropdown.prototype.handleOutsideClick = function handleOutsideClick() {
        this.setState({ active: false });
    };

    ProfileDropdown.prototype.render = function render() {
        var options = this.props.options;
        var active = this.state.active;


        return _react2.default.createElement(
            _OutsideClick2.default,
            { onOutsideClick: this.handleOutsideClick },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { className: moduleClassName('trigger'), onClick: this.handleIconClick },
                    _react2.default.createElement(_Icon2.default, { type: 'profile', size: 1.25, color: 'blue-tint-90' })
                ),
                active && _react2.default.createElement(
                    _Panel2.default,
                    { className: moduleClassName() },
                    _react2.default.createElement(
                        'div',
                        { className: 'arrow_box_ne' },
                        _react2.default.createElement(
                            'ul',
                            null,
                            options.map(function (option) {
                                return _react2.default.createElement(
                                    'li',
                                    { key: option.name, className: moduleClassName('listItem') },
                                    _react2.default.createElement(
                                        'a',
                                        { onClick: option.onClick, className: 'profile' },
                                        option.label
                                    )
                                );
                            })
                        )
                    )
                )
            )
        );
    };

    return ProfileDropdown;
}(_react.Component);

ProfileDropdown.propTypes = {
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        onClick: _propTypes2.default.func.isRequired,
        label: _propTypes2.default.string.isRequired
    }))
};
exports.default = ProfileDropdown;