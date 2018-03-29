'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OutsideClick = require('./util/OutsideClick.js');

var _OutsideClick2 = _interopRequireDefault(_OutsideClick);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _DropdownFade = require('./util/DropdownFade');

var _DropdownFade2 = _interopRequireDefault(_DropdownFade);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var preventDefault = function preventDefault(e) {
    return e.preventDefault();
};
/* eslint-disable no-useless-escape */
var safeRegexp = function safeRegexp(string) {
    return string.replace(/([\[\]\\\)\(\?\+\*\.\$\^])/g, function (match) {
        return '\\' + match;
    });
};
var defaultSearchMatch = function defaultSearchMatch(searchQuery, term) {
    return term.search(new RegExp(safeRegexp(searchQuery), 'i')) >= 0;
};
var KEYCODE = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    ESC: 27,
    TAB: 9
};
var propTypes = (0, _objectAssign2.default)({
    value: _propTypes2.default.any,
    placeholder: _propTypes2.default.string,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    searchMatch: _propTypes2.default.func.isRequired
}, _Input2.default.propTypes);

delete propTypes.type;

var SelectSearchable = function (_Component) {
    _inherits(SelectSearchable, _Component);

    function SelectSearchable() {
        var _temp, _this, _ret;

        _classCallCheck(this, SelectSearchable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
            optionsVisible: false,
            focusedIndex: 0,
            searchQuery: null
        }, _this.handleChange = function (e) {
            var value = e.target.value;


            _this.setState({ searchQuery: value });
        }, _this.handleKeyDown = function (e) {
            // eslint-disable-line
            var newState = {};

            if (e.ctrlKey || e.metaKey || e.altKey) {
                return;
            }

            var currentIndex = _this.state.focusedIndex,
                options = _this.getFilteredChildren(),
                focusedOption = options[currentIndex],
                limit = _this.props.maxResults ? Math.min(_this.props.maxResults, options.length) : options.length,
                keyCode = e.keyCode;

            if (keyCode === KEYCODE.TAB) {
                newState.optionsVisible = false;
            } else if (keyCode === KEYCODE.ESC) {
                newState.searchQuery = '';
                newState.optionsVisible = true;
            } else if (focusedOption && keyCode === KEYCODE.ENTER) {
                preventDefault(e);

                if (focusedOption.props.disabled || !_this.state.optionsVisible) {
                    return;
                }

                _this.props.onChange(e, focusedOption.props.value);

                newState.optionsVisible = false;
                newState.focusedIndex = 0;
            } else if (keyCode === KEYCODE.UP) {
                preventDefault(e);
                newState.focusedIndex = currentIndex <= 0 ? limit - 1 : currentIndex - 1;
            } else if (keyCode === KEYCODE.DOWN) {
                preventDefault(e);
                newState.focusedIndex = currentIndex >= limit - 1 ? 0 : currentIndex + 1;
            } else {
                newState.optionsVisible = true;
                newState.focusedIndex = 0;
            }

            if (_this.listElement) {
                _this.listElement.scrollTop = newState.focusedIndex * 41 - _this.listElement.clientHeight / 2 + 20;
            }

            _this.setState(newState);
        }, _this.handleOutsideClick = function () {
            _this.setState({ searchQuery: null });
            _this.hideOptions();
        }, _this.handleFocus = function (e) {
            e.target.selectionStart = 0;
            e.target.selectionEnd = e.target.value.length;
            _this.showOptions();
        }, _this.handleBlur = function (e) {
            if (!_this.state.optionsVisible) {
                _this.setState({ searchQuery: null });
                _this.hideOptions();
            } else {
                e.preventDefault();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    SelectSearchable.prototype.hideOptions = function hideOptions() {
        this.setState({ optionsVisible: false });
    };

    SelectSearchable.prototype.showOptions = function showOptions() {
        this.setState({ optionsVisible: true });
    };

    SelectSearchable.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        if (this.state.searchQuery !== null) {
            this.setState({
                searchQuery: null
            });
        }

        if (this.state.optionsVisible) {
            this.hideOptions();
        }
    };

    SelectSearchable.prototype.getFilteredChildren = function getFilteredChildren() {
        var searchQuery = this.state.searchQuery;
        var searchMatch = this.props.searchMatch;

        var isSearching = searchQuery !== null;

        return _react.Children.toArray(this.props.children).filter(function (child) {
            if (!isSearching) {
                return true;
            }

            return searchMatch(searchQuery, child.props.children);
        });
    };

    SelectSearchable.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            value = _props.value,
            onChange = _props.onChange,
            className = _props.className,
            inputProps = _objectWithoutProperties(_props, ['value', 'onChange', 'className']);

        var _state = this.state,
            searchQuery = _state.searchQuery,
            optionsVisible = _state.optionsVisible;


        var activeOptionChildren = void 0;

        var children = this.getFilteredChildren().map(function (child, index) {
            if (child.props.value === value) {
                activeOptionChildren = child.props.children;
            }

            return _react2.default.cloneElement(child, {
                active: value === child.props.value,
                focused: index === _this2.state.focusedIndex,
                onSelect: function onSelect(e) {
                    return onChange(e, child.props.value);
                }
            });
        });

        var inputValue = searchQuery !== null ? // eslint-disable-line
        searchQuery : !!activeOptionChildren ? activeOptionChildren : '';

        return _react2.default.createElement(
            _OutsideClick2.default,
            { onOutsideClick: this.handleOutsideClick },
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('m-select', className) },
                _react2.default.createElement(
                    _Input2.default.Text,
                    _extends({
                        inputClassName: 'm-select-input',
                        value: inputValue,
                        onFocus: this.handleFocus,
                        onKeyDown: this.handleKeyDown,
                        onClick: function onClick() {
                            return _this2.showOptions();
                        },
                        onBlur: this.handleBlur,
                        onChange: this.handleChange,
                        autoComplete: 'off'
                    }, inputProps),
                    _react2.default.createElement(
                        _reactTransitionGroup.TransitionGroup,
                        null,
                        optionsVisible && _react2.default.createElement(
                            _DropdownFade2.default,
                            { key: 'options' },
                            _react2.default.createElement(
                                'div',
                                { className: 'm-select-options', ref: function ref(el) {
                                        return _this2.listElement = el;
                                    } },
                                children
                            )
                        )
                    ),
                    _react2.default.createElement(_Icon2.default, { type: 'select', className: 'm-select-chevron' })
                )
            )
        );
    };

    return SelectSearchable;
}(_react.Component);

SelectSearchable.propTypes = propTypes;
SelectSearchable.defaultProps = {
    searchMatch: defaultSearchMatch
};
exports.default = SelectSearchable;