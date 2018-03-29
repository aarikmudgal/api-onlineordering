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

var _OutsideClick = require('./util/OutsideClick');

var _OutsideClick2 = _interopRequireDefault(_OutsideClick);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./SuggestionField.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CSS_BASE_CLASS = 'm-suggestionField';
var preventDefault = function preventDefault(e) {
    return e.preventDefault();
};
var KEYCODE = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    TAB: 9
};

var propTypes = (0, _objectAssign2.default)({
    showPlaceholder: _propTypes2.default.bool,
    maxResults: _propTypes2.default.number,
    mapResult: _propTypes2.default.func,
    immediateSearch: _propTypes2.default.bool,
    showIcon: _propTypes2.default.bool,
    onSearch: _propTypes2.default.func.isRequired,
    onSelect: _propTypes2.default.func.isRequired
}, _Input2.default.propTypes);

delete propTypes.value;

var SuggestionField = function (_Component) {
    _inherits(SuggestionField, _Component);

    function SuggestionField(props) {
        _classCallCheck(this, SuggestionField);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            query: _this.props.defaultValue || '',
            suggestions: [],
            focusedIndex: 0,
            noResults: false,
            showSuggestions: false
        };


        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.requestClose = _this.requestClose.bind(_this);
        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        return _this;
    }

    SuggestionField.prototype.componentDidMount = function componentDidMount() {
        if (this.props.immediateSearch) {
            this.search(this.state.query, false);
        }
    };

    SuggestionField.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.blurTimeout) {
            clearTimeout(this.blurTimeout);
        }
    };

    SuggestionField.prototype.handleKeyUp = function handleKeyUp(e) {
        switch (e.keyCode) {
            case KEYCODE.ENTER:
            case KEYCODE.RIGHT:
            case KEYCODE.LEFT:
            case KEYCODE.TAB:
                return;
            default:
                this.setState({ showSuggestions: true });
                break;
        }
    };

    SuggestionField.prototype.handleKeyDown = function handleKeyDown(e, query) {
        // eslint-disable-line max-statements,complexity
        var newState = {};

        if (e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) {
            return;
        }

        if (!query) {
            newState.noResults = false;
        }

        if (this.state.showSuggestions) {
            var currentIndex = this.state.focusedIndex,
                suggestions = this.state.suggestions,
                focusedSuggestion = suggestions[currentIndex],
                limit = this.props.maxResults ? Math.min(this.props.maxResults, suggestions.length) : suggestions.length,
                keyCode = e.keyCode;

            if (focusedSuggestion && (keyCode === KEYCODE.ENTER || keyCode === KEYCODE.RIGHT || keyCode === KEYCODE.TAB)) {
                preventDefault(e);

                this.handleSelect(focusedSuggestion);

                newState.showSuggestions = false;
                newState.focusedIndex = 0;
            } else if (keyCode === KEYCODE.UP) {
                preventDefault(e);
                newState.focusedIndex = currentIndex <= 0 ? limit - 1 : currentIndex - 1;
            } else if (keyCode === KEYCODE.DOWN) {
                preventDefault(e);
                newState.focusedIndex = currentIndex >= limit - 1 ? 0 : currentIndex + 1;
            } else {
                newState.focusedIndex = 0;
            }

            if (this.listElement) {
                this.listElement.scrollTop = newState.focusedIndex * 41 - this.listElement.clientHeight / 2 + 20;
            }
        }

        this.setState(newState);
    };

    SuggestionField.prototype.requestClose = function requestClose() {
        var _this2 = this;

        this.blurTimeout = setTimeout(function () {
            _this2.setState({
                showSuggestions: false,
                noResults: false
            });
        }, 10);
    };

    SuggestionField.prototype.handleSelect = function handleSelect(selection, e) {
        if (e) {
            preventDefault(e);
        }

        var mapResult = this.props.mapResult;


        this.setState({
            showSuggestions: false,
            suggestions: [],
            query: mapResult(selection, this.state.query).value
        });

        this.props.onSelect(selection);
    };

    SuggestionField.prototype.handleFocus = function handleFocus() {
        if (this.props.immediateSearch) {
            this.setState({ showSuggestions: true });
            this.search(this.state.query, false);
        }
    };

    SuggestionField.prototype.handleChange = function handleChange(event, query) {
        this.search(query, true);
    };

    SuggestionField.prototype.search = function search(query, queryCheck) {
        var _this3 = this;

        this.setState({
            query: query
        });

        this.props.onSearch(query).then(function (results) {
            if (!queryCheck || _this3.state.query === query) {
                _this3.setState({
                    suggestions: results,
                    noResults: !results.length
                });
            }
        });
    };

    SuggestionField.prototype.renderSuggestions = function renderSuggestions() {
        var _this4 = this;

        var _props = this.props,
            mapResult = _props.mapResult,
            maxResults = _props.maxResults,
            _state = this.state,
            suggestions = _state.suggestions,
            focusedIndex = _state.focusedIndex,
            query = _state.query;


        return _react2.default.createElement(
            'ul',
            { className: CSS_BASE_CLASS + '-list', ref: function ref(el) {
                    return _this4.listElement = el;
                } },
            suggestions.slice(0, maxResults || suggestions.length).map(function (suggestion, index) {
                var boundHandleSelect = _this4.handleSelect.bind(_this4, suggestion),
                    itemClassNames = (0, _classnames2.default)(CSS_BASE_CLASS + '-item', index === focusedIndex ? CSS_BASE_CLASS + '-itemFocused' : undefined),
                    mappedSuggestion = mapResult(suggestion, query);

                return _react2.default.createElement(
                    'li',
                    { key: mappedSuggestion.name, className: itemClassNames },
                    _react2.default.createElement(
                        'a',
                        {
                            href: '#',
                            tabIndex: '-1',
                            onClick: boundHandleSelect
                        },
                        mappedSuggestion.node || mappedSuggestion.value
                    )
                );
            })
        );
    };

    SuggestionField.prototype.renderPlaceholder = function renderPlaceholder() {
        var focusedSuggestion = this.props.mapResult(this.state.suggestions[this.state.focusedIndex], this.state.query);

        return _react2.default.createElement(
            'div',
            { className: CSS_BASE_CLASS + '-placeholder' },
            focusedSuggestion.node || focusedSuggestion.value
        );
    };

    SuggestionField.prototype.render = function render() {
        var _props2 = this.props,
            onSelect = _props2.onSelect,
            maxResults = _props2.maxResults,
            defaultValue = _props2.defaultValue,
            showIcon = _props2.showIcon,
            showPlaceholder = _props2.showPlaceholder,
            children = _props2.children,
            textFieldProps = _objectWithoutProperties(_props2, ['onSelect', 'maxResults', 'defaultValue', 'showIcon', 'showPlaceholder', 'children']),
            _state2 = this.state,
            suggestions = _state2.suggestions,
            showSuggestions = _state2.showSuggestions,
            noResults = _state2.noResults,
            query = _state2.query,
            focusedIndex = _state2.focusedIndex,
            focusedSuggestion = suggestions[focusedIndex],
            hasSuggestions = !!suggestions.length,
            classNames = (0, _classnames2.default)(CSS_BASE_CLASS, showPlaceholder && showSuggestions && focusedSuggestion ? CSS_BASE_CLASS + '-showPlaceholder' : null, showSuggestions && focusedSuggestion ? CSS_BASE_CLASS + '-focusedSuggestion' : null, showIcon ? CSS_BASE_CLASS + '-hasIcon' : null);

        return _react2.default.createElement(
            _OutsideClick2.default,
            { onOutsideClick: this.requestClose, className: classNames },
            _react2.default.createElement(
                _Input2.default,
                _extends({
                    onKeyDown: this.handleKeyDown,
                    onKeyUp: this.handleKeyUp,
                    onFocus: this.handleFocus,
                    onChange: this.handleChange,
                    value: query,
                    autoComplete: 'off'
                }, textFieldProps),
                showPlaceholder && showSuggestions && focusedSuggestion && this.renderPlaceholder(),
                showSuggestions && hasSuggestions && this.renderSuggestions(),
                showSuggestions && noResults && !!query ? _react2.default.createElement(
                    'div',
                    { className: CSS_BASE_CLASS + '-noResults' },
                    children
                ) : null,
                showIcon && _react2.default.createElement(_Icon2.default, { type: 'select', className: CSS_BASE_CLASS + '-chevron' })
            )
        );
    };

    return SuggestionField;
}(_react.Component);

SuggestionField.propTypes = propTypes;
SuggestionField.defaultProps = {
    type: 'search',
    showPlaceholder: false,
    immediateSearch: false,
    showIcon: false,
    maxResults: 5,
    mapResult: function mapResult(result) {
        return result;
    }
};

SuggestionField.safeRegexp = function (string) {
    return string.replace(/([\[\]\\\)\(\?\+\*\.\$\^])/g, function (match) {
        return '\\' + match;
    });
};

SuggestionField.wrapSelection = function (string, query) {
    var tokenDelimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '__TOKEN_DELIIMTER__';

    if (!query || !string) {
        return string;
    }

    var safeQuery = SuggestionField.safeRegexp(query);

    var queryRegExp = new RegExp(safeQuery, 'i');

    return string.replace(queryRegExp, function (match) {
        return '' + tokenDelimiter + match + tokenDelimiter;
    }).split(tokenDelimiter).filter(function (part) {
        return !!part;
    }).map(function (part, i) {
        if (part.search(queryRegExp) !== 0) {
            return _react2.default.createElement(
                'span',
                { key: i },
                part
            );
        }

        return _react2.default.createElement(
            'span',
            { key: i + '-k', className: CSS_BASE_CLASS + '-itemSelection' },
            part
        );
    });
};

exports.default = SuggestionField;