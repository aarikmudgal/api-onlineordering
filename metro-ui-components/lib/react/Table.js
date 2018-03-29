'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Table;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Table.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-table');

var stopPropagation = function stopPropagation(event) {
    return event.stopPropagation();
};

function Table(_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['children', 'className']);

    return _react2.default.createElement(
        'table',
        _extends({ className: (0, _classnames2.default)(moduleClassName(), className) }, props),
        children
    );
}

Table.Responsive = function (props) {
    return _react2.default.createElement(
        'div',
        { className: moduleClassName('responsive') },
        _react2.default.createElement(Table, props)
    );
};
Table.Responsive.displayName = 'Table.Responsive';

Table.HeadCell = function (_ref2) {
    var children = _ref2.children,
        sort = _ref2.sort,
        className = _ref2.className,
        props = _objectWithoutProperties(_ref2, ['children', 'sort', 'className']);

    return _react2.default.createElement(
        'th',
        _extends({
            className: (0, _classnames2.default)(moduleClassName('headCell'), !!sort && moduleClassName('headCell-isActive'), className)
        }, props),
        children,
        !!sort && _react2.default.createElement(_Icon2.default, { type: sort === 'asc' ? 'arrow-down-tail' : 'arrow-up-tail' })
    );
};
Table.HeadCell.displayName = 'Table.HeadCell';

Table.Head = function (_ref3) {
    var children = _ref3.children,
        className = _ref3.className,
        checkbox = _ref3.checkbox,
        props = _objectWithoutProperties(_ref3, ['children', 'className', 'checkbox']);

    return _react2.default.createElement(
        'thead',
        _extends({ className: (0, _classnames2.default)(moduleClassName('head'), className) }, props),
        _react2.default.createElement(
            'tr',
            null,
            !!checkbox && _react2.default.createElement(Table.Checkbox, _extends({ Component: Table.HeadCell }, checkbox)),
            children
        )
    );
};
Table.Head.displayName = 'Table.Head';

Table.Body = function (_ref4) {
    var children = _ref4.children,
        className = _ref4.className,
        props = _objectWithoutProperties(_ref4, ['children', 'className']);

    return _react2.default.createElement(
        'tbody',
        _extends({ className: (0, _classnames2.default)(moduleClassName('body'), className) }, props),
        children
    );
};
Table.Body.displayName = 'Table.Body';

Table.Cell = function (_ref5) {
    var children = _ref5.children,
        nowrap = _ref5.nowrap,
        className = _ref5.className,
        props = _objectWithoutProperties(_ref5, ['children', 'nowrap', 'className']);

    return _react2.default.createElement(
        'td',
        _extends({ className: (0, _classnames2.default)(moduleClassName('cell'), nowrap && moduleClassName('cell-isNowrap'), className) }, props),
        children
    );
};
Table.Cell.displayName = 'Table.Cell';

Table.Checkbox = function (_ref6) {
    var onChange = _ref6.onChange,
        Component = _ref6.Component,
        props = _objectWithoutProperties(_ref6, ['onChange', 'Component']);

    return _react2.default.createElement(
        Component,
        { className: moduleClassName('cell-small') },
        _react2.default.createElement(_Checkbox2.default, _extends({ onClick: stopPropagation, onChange: onChange }, props))
    );
};
Table.Checkbox.displayName = 'Table.Checkbox';

Table.Row = function (_ref7) {
    var children = _ref7.children,
        onClick = _ref7.onClick,
        className = _ref7.className,
        expired = _ref7.expired,
        checkbox = _ref7.checkbox,
        props = _objectWithoutProperties(_ref7, ['children', 'onClick', 'className', 'expired', 'checkbox']);

    return _react2.default.createElement(
        'tr',
        _extends({
            className: (0, _classnames2.default)(moduleClassName('row'), !!checkbox && !!checkbox.checked && moduleClassName('row-isSelected'), !!onClick && moduleClassName('row-isClickable'), !!expired && moduleClassName('row-isExpired'), className),
            onClick: onClick
        }, props),
        !!checkbox && _react2.default.createElement(Table.Checkbox, _extends({ Component: Table.Cell }, checkbox)),
        children,
        _react2.default.createElement(
            Table.Cell,
            { className: moduleClassName('cell-small') },
            _react2.default.createElement(_Icon2.default, { type: 'arrow-right' })
        )
    );
};
Table.Row.displayName = 'Table.Row';