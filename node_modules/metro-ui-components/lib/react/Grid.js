'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createArrayOfLength = require('./util/createArrayOfLength');

var _createArrayOfLength2 = _interopRequireDefault(_createArrayOfLength);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Grid.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Row = function Row(_ref) {
    var children = _ref.children,
        fluid = _ref.fluid,
        centerVertical = _ref.centerVertical;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('m-row', {
                'm-row-fluid': fluid,
                'm-row-centerVertical': centerVertical
            }) },
        children
    );
};

Row.propTypes = {
    fluid: _propTypes2.default.bool
};
Row.displayName = 'Grid.Row';

/**
 * Generates propTypes for grid column
 * {
 *   xsWide1of3: PropTypes.bool,
 *   xsWide2of3: PropTypes.bool,
 *   ...
 * }
 */
var generateColumnPropTypes = function generateColumnPropTypes() {
    var columnSizes = ['xs', 'sm', 'md', 'lg'];
    var gutterTypes = ['', 'Wide', 'Tight'];
    var columnCycles = [1, 2, 3, 4, 5, 6, 7, 8];

    /* eslint-disable max-nested-callbacks */
    return columnSizes.reduce(function (soFar, size) {
        return _extends({}, soFar, gutterTypes.reduce(function (gutters, gutterSize) {
            return _extends({}, gutters, columnCycles.reduce(function (columns, column) {
                return _extends({}, columns, (0, _createArrayOfLength2.default)(column).reduce(function (repeated, cycle, index) {
                    var _extends2;

                    return _extends({}, repeated, (_extends2 = {}, _extends2['' + size + gutterSize + (index + 1) + 'of' + column] = _propTypes2.default.bool, _extends2));
                }, {}));
            }, {}));
        }, {}));
    }, {
        centered: _propTypes2.default.bool
    });
};

var buildColClassNames = function buildColClassNames(props) {
    return Object.keys(props).map(function (key) {
        return 'm-col-' + key;
    });
};

var Col = function Col(_ref2) {
    var children = _ref2.children,
        props = _objectWithoutProperties(_ref2, ['children']);

    return (// eslint-disable-line react/no-multi-comp
        _react2.default.createElement(
            'div',
            {
                className: (0, _classnames2.default)(buildColClassNames(props))
            },
            children
        )
    );
};

Col.propTypes = generateColumnPropTypes();
Col.displayName = 'Grid.Col';

exports.default = {
    Row: Row,
    Col: Col
};