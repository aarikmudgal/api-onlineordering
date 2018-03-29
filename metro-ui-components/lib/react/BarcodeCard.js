'use strict';

exports.__esModule = true;
exports.CARD_TYPES = undefined;
exports.default = BarcodeCard;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./BarcodeCard.css'); }

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _preventDefaultAnd = require('./util/preventDefaultAnd');

var _preventDefaultAnd2 = _interopRequireDefault(_preventDefaultAnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requiredString = _propTypes2.default.string.isRequired;

var CARD_TYPES = exports.CARD_TYPES = ['blue', 'gold', 'red', 'green', 'tr-bl', 'tr-pc', 'nl-bl', 'nl-si', 'nl-vp', 'nl-go', 'nl-pc', 'de-bl', 'de-si', 'de-go', 'de-pc', 'de-eu'];

var propTypes = {
    noCreditPayment: _propTypes2.default.bool,
    onNoCreditPaymentClick: _propTypes2.default.func,
    cardholderName: requiredString,
    companyName: requiredString,
    cardNumberLabel: requiredString,
    cardNumber: requiredString,
    cardType: _propTypes2.default.oneOf(CARD_TYPES),
    cardTypeLabel: requiredString
};

function BarcodeCard(props) {
    var children = props.children,
        noCreditPayment = props.noCreditPayment,
        onNoCreditPaymentClick = props.onNoCreditPaymentClick,
        cardholderName = props.cardholderName,
        companyName = props.companyName,
        cardNumberLabel = props.cardNumberLabel,
        cardNumber = props.cardNumber,
        cardType = props.cardType,
        cardTypeLabel = props.cardTypeLabel;


    var noCreditPaymentIcon = _react2.default.createElement('img', { src: require('../img/metro/digitalcard/icon-no-credit-small.svg') });

    return _react2.default.createElement(
        'div',
        { className: 'm-barcodeCard' },
        _react2.default.createElement(_Icon2.default, { type: 'direction-up', color: 'grey-tint-80', className: 'm-barcodeCard-icon' }),
        _react2.default.createElement(
            'div',
            { className: 'm-barcodeCard-code' },
            children
        ),
        _react2.default.createElement(
            'div',
            { className: 'm-barcodeCard-section' },
            _react2.default.createElement(
                'p',
                null,
                cardholderName,
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'strong',
                    null,
                    companyName
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('m-barcodeCard-section', !!noCreditPayment && 'm-barcodeCard-hasImage') },
            _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                    'small',
                    null,
                    cardNumberLabel
                ),
                _react2.default.createElement('br', null),
                cardNumber
            ),
            !!noCreditPayment && (onNoCreditPaymentClick ? _react2.default.createElement(
                'a',
                {
                    href: '#',
                    className: 'm-barcodeCard-noCreditPaymentLink',
                    onClick: (0, _preventDefaultAnd2.default)(onNoCreditPaymentClick)
                },
                noCreditPaymentIcon
            ) : noCreditPaymentIcon)
        ),
        _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('m-barcodeCard-secure', 'm-barcodeCard-' + cardType) },
            _react2.default.createElement(
                'strong',
                null,
                cardTypeLabel
            ),
            _react2.default.createElement('span', null),
            _react2.default.createElement('span', null),
            _react2.default.createElement('span', null),
            _react2.default.createElement('span', null),
            _react2.default.createElement('span', null),
            _react2.default.createElement('span', null)
        )
    );
}

BarcodeCard.propTypes = propTypes;