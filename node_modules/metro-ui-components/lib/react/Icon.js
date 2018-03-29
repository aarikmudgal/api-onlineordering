'use strict';

exports.__esModule = true;
exports.default = Icon;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('fbjs/lib/warning');

var _warning2 = _interopRequireDefault(_warning);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propertyToMCSSstate = require('./util/propertyToMCSSstate');

var _propertyToMCSSstate2 = _interopRequireDefault(_propertyToMCSSstate);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Icon.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ICON_TYPES = {
    add: require('./icons/icon_add').default,
    'arrow-up-tail': require('./icons/icon_arrow-up-tail').default,
    'arrow-down-tail': require('./icons/icon_arrow-down-tail').default,
    'arrow-down': require('./icons/icon_arrow-down').default,
    'arrow-left': require('./icons/icon_arrow-left').default,
    'arrow-right': require('./icons/icon_arrow-right').default,
    'arrow-up': require('./icons/icon_arrow-up').default,
    back: require('./icons/icon_back').default,
    brochures: require('./icons/icon_brochures').default,
    'bookable-services': require('./icons/icon_bookable-services').default,
    business: require('./icons/icon_business').default,
    card: require('./icons/icon_card').default,
    cardholder: require('./icons/icon_cardholder').default,
    'check-large': require('./icons/icon_check-large').default,
    'check-small-filled': require('./icons/icon_check-small-filled').default,
    'check-small': require('./icons/icon_check-small').default,
    check: require('./icons/icon_check').default,
    'chevron-down-2': require('./icons/icon_chevron-down-2').default,
    close: require('./icons/icon_close').default,
    dialog: require('./icons/icon_dialog').default,
    'direction-up': require('./icons/icon_direction-up').default,
    download: require('./icons/icon_download').default,
    'drag-drop-large': require('./icons/icon_drag-drop-large').default,
    messaging: require('./icons/icon_messaging').default,
    'edit-field': require('./icons/icon_edit-field').default,
    edit: require('./icons/icon_edit').default,
    'error-large': require('./icons/icon_error-large').default,
    group: require('./icons/icon_group').default,
    help: require('./icons/icon_help').default,
    hide: require('./icons/icon_hide').default,
    'indeterminate-small': require('./icons/icon_indeterminate-small').default,
    'info-large': require('./icons/icon_info-large').default,
    info: require('./icons/icon_info').default,
    launch: require('./icons/icon_launch').default,
    location: require('./icons/icon_location').default,
    lock: require('./icons/icon_lock').default,
    logout: require('./icons/icon_logout').default,
    notification: require('./icons/icon_notification').default,
    phone: require('./icons/icon_phone').default,
    profile: require('./icons/icon_profile').default,
    reload: require('./icons/icon_reload').default,
    remove: require('./icons/icon_remove').default,
    scanner: require('./icons/icon_scanner').default,
    search: require('./icons/icon_search').default,
    security: require('./icons/icon_security').default,
    select: require('./icons/icon_select').default,
    settings: require('./icons/icon_settings').default,
    share: require('./icons/icon_share').default,
    show: require('./icons/icon_show').default,
    'thumbs-up-large': require('./icons/icon_thumbs-up-large').default,
    'thumbs-up': require('./icons/icon_thumbs-up').default,
    timer: require('./icons/icon_timer').default,
    trash: require('./icons/icon_trash').default,
    unlock: require('./icons/icon_unlock').default,
    'warning-small-filled': require('./icons/icon_warning-small-filled').default,
    warning: require('./icons/icon_warning').default,
    newsletter: require('./icons/icon_newsletter').default
};

function Icon(_ref) {
    var animate = _ref.animate,
        type = _ref.type,
        className = _ref.className,
        color = _ref.color,
        size = _ref.size;

    var props = {
        className: (0, _classnames2.default)(['m-icon', className, color, animate !== 'none' && (0, _propertyToMCSSstate2.default)('m-icon', animate)]),
        style: size ? { fontSize: size + 'rem' } : undefined
    };
    var iconType = Icon.UPDATED_TYPES[type] ? Icon.UPDATED_TYPES[type] : type;

    (0, _warning2.default)(!Icon.UPDATED_TYPES[type], 'metro-ui-components deprecation notice: Icon type "' + type + '" has been renamed to "' + Icon.UPDATED_TYPES[type] + '".');

    var IconSvg = ICON_TYPES[iconType];

    if (!IconSvg) {
        return null;
    }

    return _react2.default.createElement(IconSvg, props);
}

Icon.ANIMATE = ['none', 'rotate'];

Icon.COLORS = ['metro-blue', 'metro-yellow', 'blue', 'green', 'red', 'grey', 'white', 'black', 'metro-blue-tint-95', 'metro-blue-tint-90', 'metro-blue-tint-80', 'metro-blue-tint-60', 'metro-blue-tint-40', 'metro-blue-tint-20', 'blue-tint-95', 'blue-tint-90', 'blue-tint-80', 'blue-tint-60', 'blue-tint-40', 'blue-tint-20', 'blue-shade-40', 'blue-shade-20', 'green-tint-95', 'green-tint-90', 'green-tint-80', 'green-tint-60', 'green-tint-40', 'green-tint-20', 'red-tint-95', 'red-tint-90', 'red-tint-80', 'red-tint-60', 'red-tint-40', 'red-tint-20', 'red-shade-40', 'red-shade-20', 'grey-tint-95', 'grey-tint-90', 'grey-tint-80', 'grey-tint-60', 'grey-tint-40', 'grey-tint-20'];

/**
 * Icon.UPDATED_TYPES
 *
 * In case, an Icon needs to be renamed,
 * remove the old name from TYPES, but add it
 * as a mapping to UPDATED_TYPES, to create a deprecation warning.
 * */
Icon.UPDATED_TYPES = {
    // 'old-icon': 'new-icon'
    'alert-info': 'info',
    'add-circle-1': 'add',
    'alert-warning': 'warning',
    'arrow-2-left': 'back',
    'arrow-left-7': 'back',
    'arrow-down-12': 'arrow-down',
    'arrow-reload': 'reload',
    start_registration: 'launch',
    'information-circle': 'info',
    'report-problem-triangle': 'warning',
    'credit-card-hand': 'card',
    'help-circle': 'help',
    decline: 'close',
    user: 'profile',
    'lock-close-1': 'lock',
    'pencil-2': 'edit',
    locked: 'lock',
    'location-pin-8': 'location',
    dropdown: 'arrow-down',
    'account-circle-1': 'profile',
    'pencil-fill': 'edit-field',
    'checkmark-success': 'check-large',
    'book-open-3': 'brochures',
    direction: 'direction-up',
    view: 'show',
    'phone-5': 'phone',
    avatar: 'profile'
};

Icon.TYPES = Object.keys(ICON_TYPES);

Icon.propTypes = {
    type: _propTypes2.default.oneOf(Icon.TYPES).isRequired,
    color: _propTypes2.default.oneOf(Icon.COLORS),
    animate: _propTypes2.default.oneOf(Icon.ANIMATE),
    size: _propTypes2.default.number,
    className: _propTypes2.default.string
};

Icon.defaultProps = {
    animate: 'none'
};