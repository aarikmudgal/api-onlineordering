'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _moduleClassNameFactory = require('../util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerFactory = function DatePickerFactory(_ref) {
    var ReactDayPicker = _ref.ReactDayPicker;

    var DateUtils = ReactDayPicker.DateUtils;
    var moduleClassName = (0, _moduleClassNameFactory2.default)('m-datePicker');

    var classNames = {
        // The container element
        container: moduleClassName('container'),
        // The wrapper element, used for keyboard interaction
        wrapper: moduleClassName('wrapper'),
        // Added to the container when there's no interaction with the calendar
        interactionDisabled: moduleClassName('isDisabled'),

        // The navigation bar with the arrows to switch between months
        navBar: moduleClassName('navBar'),
        // Button to switch to the previous month
        navButtonPrev: (0, _classnames2.default)(moduleClassName('navButton'), moduleClassName('navButton-isPrev')),
        // Button to switch to the next month
        navButtonNext: (0, _classnames2.default)(moduleClassName('navButton'), moduleClassName('navButton-isNext')),
        // Added to the navbuttons when disabled with fromMonth/toMonth props
        navButtonInteractionDisabled: moduleClassName('navButton-isDisabled'),

        // The month's main tables
        month: moduleClassName('month'),
        // The caption element: // The moduleClassNamecaption ('element'), containing the current month's name and year
        caption: moduleClassName('caption'),
        // Table header displaying the weekdays names
        weekdays: moduleClassName('weekdays'),
        // Table row displaying the weekdays names
        weekdaysRow: moduleClassName('weekdaysRow'),
        // Cell displaying the weekday name
        weekday: moduleClassName('weekday'),
        // Cell displaying the weekNumber
        weekNumber: moduleClassName('weekNumber'),
        // Table's body with the weeks
        body: moduleClassName('body'),
        // Table's row for each week
        week: moduleClassName('week'),
        // The single day cell
        day: moduleClassName('day'),

        // The calendar footer (only with todayButton prop)
        footer: moduleClassName('footer'),
        // The today button (only with todayButton prop)
        todayButton: moduleClassName('todayButton'),

        /* default modifiers */
        // Added to the day's cell for the current day
        today: moduleClassName('day-isToday'),
        // Added to the day's cell specified in the "selectedDays" prop
        selected: moduleClassName('day-isSelected'),
        // Added to the day's cell specified in the "disabledDays" prop
        disabled: moduleClassName('day-isDisabled'),
        // Added to the day's cell outside the current month
        outside: moduleClassName('day-isOutside')
    };

    function Navbar(_ref2) {
        var nextMonth = _ref2.nextMonth,
            previousMonth = _ref2.previousMonth,
            onPreviousClick = _ref2.onPreviousClick,
            onNextClick = _ref2.onNextClick,
            className = _ref2.className,
            localeUtils = _ref2.localeUtils;

        var months = localeUtils.getMonths();
        var prev = months[previousMonth.getMonth()];
        var next = months[nextMonth.getMonth()];

        return _react2.default.createElement(
            'div',
            { className: className },
            _react2.default.createElement(_IconButton2.default, {
                type: 'arrow-left',
                className: classNames.navButtonPrev,
                onClick: function onClick() {
                    return onPreviousClick();
                },
                title: '\u2190 ' + prev.slice(0, 3)
            }),
            _react2.default.createElement(_IconButton2.default, {
                type: 'arrow-right',
                className: classNames.navButtonNext,
                onClick: function onClick() {
                    return onNextClick();
                },
                title: next.slice(0, 3) + '  \u2192'
            })
        );
    }

    var DatePicker = function (_Component) {
        _inherits(DatePicker, _Component);

        function DatePicker() {
            _classCallCheck(this, DatePicker);

            return _possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        DatePicker.prototype.render = function render() {
            var _props = this.props,
                _onDayClick = _props.onDayClick,
                children = _props.children,
                className = _props.className,
                props = _objectWithoutProperties(_props, ['onDayClick', 'children', 'className']);

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(moduleClassName(), className) },
                _react2.default.createElement(ReactDayPicker, _extends({
                    classNames: classNames,
                    enableOutsideDays: true,
                    showWeekNumbers: false,
                    navbarElement: _react2.default.createElement(Navbar, null),
                    renderDay: DatePicker.renderDay,
                    onDayClick: function onDayClick(day, ctx) {
                        return _onDayClick(day, DatePicker.cleanUpModifiers(ctx));
                    }
                }, props)),
                !!children && _react2.default.createElement(
                    'div',
                    { className: moduleClassName('footer') },
                    children
                )
            );
        };

        return DatePicker;
    }(_react.Component);

    DatePicker.propTypes = (0, _objectAssign2.default)({}, ReactDayPicker.propTypes);
    DatePicker.defaultProps = {
        labels: ReactDayPicker.defaultProps.labels
    };

    DatePicker.renderDay = function (day) {
        return _react2.default.createElement(
            'span',
            { className: moduleClassName('dayInner') },
            day.getDate()
        );
    };

    DatePicker.cleanUpModifiers = function (ctx) {
        return Object.keys(ctx).reduce(function (cleanedModifiers, modifierName) {
            cleanedModifiers[modifierName.replace(classNames.day + '-', '')] = true;
            return cleanedModifiers;
        }, {});
    };

    var DatePickerRange = function (_Component2) {
        _inherits(DatePickerRange, _Component2);

        function DatePickerRange(props) {
            _classCallCheck(this, DatePickerRange);

            var _this2 = _possibleConstructorReturn(this, _Component2.call(this, props));

            _this2.handleDayClick = _this2.handleDayClick.bind(_this2);
            _this2.handleDayMouseEnter = _this2.handleDayMouseEnter.bind(_this2);
            _this2.handleResetClick = _this2.handleResetClick.bind(_this2);
            _this2.state = _this2.getInitialState();
            return _this2;
        }

        DatePickerRange.prototype.getInitialState = function getInitialState() {
            var _props$range = this.props.range,
                from = _props$range.from,
                to = _props$range.to;


            return {
                from: from || null,
                to: to || null,
                enteredTo: to || null // Keep track of the last day for mouseEnter.
            };
        };

        DatePickerRange.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            var to = this.state.to || this.state.enteredTo;

            if (!DateUtils.isSameDay(nextProps.range.from, this.state.from) || !DateUtils.isSameDay(nextProps.range.to, to)) {
                this.setState({
                    from: nextProps.from,
                    to: nextProps.to,
                    enteredTo: null
                });
            }
        };

        DatePickerRange.prototype.isSelectingFirstDay = function isSelectingFirstDay(from, to, day) {
            var isBeforeFirtDay = from && DateUtils.isDayBefore(day, from);
            var isRangeSelected = from && to;

            return !from || isBeforeFirtDay || isRangeSelected;
        };

        DatePickerRange.prototype.handleDayClick = function handleDayClick(day) {
            var _state = this.state,
                from = _state.from,
                to = _state.to;


            if (from && to && day >= from && day <= to) {
                this.handleResetClick();
                return;
            }
            if (this.isSelectingFirstDay(from, to, day)) {
                this.setState({
                    from: day,
                    to: null,
                    enteredTo: null
                });
            } else {
                this.setState({
                    to: day,
                    enteredTo: day
                });
                this.props.onRangeChange({ from: from, to: day });
            }
        };

        DatePickerRange.prototype.handleDayMouseEnter = function handleDayMouseEnter(day) {
            var _state2 = this.state,
                from = _state2.from,
                to = _state2.to;


            if (!this.isSelectingFirstDay(from, to, day)) {
                this.setState({
                    enteredTo: day
                });
            }
        };

        DatePickerRange.prototype.handleResetClick = function handleResetClick() {
            var initialState = this.getInitialState();

            this.setState(initialState);

            this.props.onRangeChange(null);
        };

        DatePickerRange.prototype.render = function render() {
            var _this3 = this,
                _modifiers;

            var _props2 = this.props,
                onRangeChange = _props2.onRangeChange,
                props = _objectWithoutProperties(_props2, ['onRangeChange']);

            var _state3 = this.state,
                from = _state3.from,
                enteredTo = _state3.enteredTo;

            var modifiers = (_modifiers = {}, _modifiers[moduleClassName('day-isRangeStart')] = function (day) {
                return DatePickerRange.isRangeStart(day, _this3.state);
            }, _modifiers[moduleClassName('day-isRangeEnd')] = function (day) {
                return DatePickerRange.isRangeEnd(day, _this3.state);
            }, _modifiers[moduleClassName('day-isInRange')] = function (day) {
                return day > from && day < enteredTo;
            }, _modifiers);
            var disabledDays = { before: this.state.from };
            var selectedDays = [from, { from: from, to: enteredTo }];

            return _react2.default.createElement(DatePicker, _extends({
                fromMonth: from,
                fixedWeeks: true,
                selectedDays: selectedDays,
                disabledDays: disabledDays,
                modifiers: modifiers,
                onDayClick: this.handleDayClick,
                onDayMouseEnter: this.handleDayMouseEnter
            }, props));
        };

        return DatePickerRange;
    }(_react.Component);

    DatePickerRange.displayName = 'DatePicker.Range';
    DatePickerRange.propTypes = (0, _objectAssign2.default)({
        range: _propTypes2.default.shape({ to: _propTypes2.default.object, from: _propTypes2.default.object }),
        onRangeChange: _propTypes2.default.func.isRequired
    }, DatePicker.propTypes);
    DatePickerRange.defaultProps = Object.assign({
        range: {}
    }, DatePicker.defaultProps);

    DatePickerRange.isRangeStart = function (day, _ref3) {
        var from = _ref3.from,
            to = _ref3.to,
            enteredTo = _ref3.enteredTo;
        return (!!enteredTo || !!to) && !DateUtils.isSameDay(enteredTo, from) && DateUtils.isSameDay(day, from);
    };

    DatePickerRange.isRangeEnd = function (day, _ref4) {
        var from = _ref4.from,
            to = _ref4.to,
            enteredTo = _ref4.enteredTo;
        return (!!enteredTo || !!to) && !DateUtils.isSameDay(day, from) && (DateUtils.isSameDay(day, enteredTo) || DateUtils.isSameDay(day, to));
    };

    DatePicker.Range = DatePickerRange;

    return DatePicker;
};

var dayPickerNotAvailable = function dayPickerNotAvailable() {
    return _react2.default.createElement(
        'pre',
        null,
        'Datepicker requires \'react-day-picker\'.',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'code',
            null,
            'npm install --save react-day-picker'
        )
    );
};

exports.default = function (factory) {
    var ReactDayPicker = void 0;

    try {
        ReactDayPicker = require('react-day-picker');
        if (!process.env.ALEX_UI_IGNORE_CSS) { require('./DatePicker.css'); }
    } catch (err) {
        dayPickerNotAvailable.Range = dayPickerNotAvailable;
        return dayPickerNotAvailable;
    }

    return factory({ ReactDayPicker: ReactDayPicker });
}(DatePickerFactory);