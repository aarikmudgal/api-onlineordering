'use strict';

exports.__esModule = true;
exports.default = CountrySelectionList;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _preventDefaultAnd = require('./util/preventDefaultAnd');

var _preventDefaultAnd2 = _interopRequireDefault(_preventDefaultAnd);

var _CountryFlag = require('./CountryFlag');

var _CountryFlag2 = _interopRequireDefault(_CountryFlag);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./CountrySelectionList.css'); }

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-countrySelectionList');

/* Todo: Refactor, to use with <Media/> */
function CountrySelectionList(_ref) {
    var children = _ref.children,
        inline = _ref.inline;

    return _react2.default.createElement(
        'ul',
        { className: (0, _classnames2.default)(moduleClassName(), !!inline && moduleClassName('isInline')) },
        children
    );
}

function CountrySelectionListItem(props) {
    // eslint-disable-line react/no-multi-comp
    var arrow = props.arrow,
        arrowType = props.arrowType,
        flag = props.flag,
        onClick = props.onClick,
        market = props.market,
        url = props.url,
        check = props.check;


    return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
            'a',
            {
                href: '#',
                onClick: (0, _preventDefaultAnd2.default)(onClick),
                className: (0, _classnames2.default)(check ? moduleClassName('isChecked') : 0)
            },
            _react2.default.createElement(_CountryFlag2.default, { type: flag }),
            _react2.default.createElement(
                'div',
                { className: moduleClassName('country') },
                _react2.default.createElement(
                    'span',
                    { className: moduleClassName('countryMarket') },
                    market
                ),
                !!url && _react2.default.createElement(
                    'span',
                    { className: moduleClassName('countryURL') },
                    url
                )
            ),
            check && _react2.default.createElement(_Icon2.default, { type: 'check', color: 'green', size: 1.5 }),
            arrow && _react2.default.createElement(_Icon2.default, { type: arrowType, color: 'blue' })
        )
    );
}

CountrySelectionListItem.propTypes = {
    flag: _CountryFlag2.default.propTypes.type,
    market: _propTypes2.default.string.isRequired,
    url: _propTypes2.default.string,
    onClick: _propTypes2.default.func.isRequired,
    arrow: _propTypes2.default.bool,
    arrowType: _propTypes2.default.oneOf(['arrow-right', 'select']),
    check: _propTypes2.default.bool
};

CountrySelectionListItem.defaultProps = {
    arrowType: 'arrow-right',
    check: false
};

CountrySelectionList.Item = CountrySelectionListItem;

CountrySelectionList.Footer = function (_ref2) {
    var children = _ref2.children,
        className = _ref2.className;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName('footer'), className) },
        children
    );
};

CountrySelectionList.Footer.displayName = 'CountrySelectionList.Footer';