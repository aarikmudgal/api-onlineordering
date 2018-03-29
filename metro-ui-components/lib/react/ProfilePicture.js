'use strict';

exports.__esModule = true;
exports.placeholderGenderTypes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _preventDefaultAnd = require('./util/preventDefaultAnd');

var _preventDefaultAnd2 = _interopRequireDefault(_preventDefaultAnd);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./ProfilePicture.css'); }

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _propertyToMCSSstate = require('./util/propertyToMCSSstate');

var _propertyToMCSSstate2 = _interopRequireDefault(_propertyToMCSSstate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-profilePicture');

var placeholderGenderTypes = exports.placeholderGenderTypes = ['neutral', 'female', 'male'];

var ProfilePicture = function (_Component) {
    _inherits(ProfilePicture, _Component);

    function ProfilePicture() {
        _classCallCheck(this, ProfilePicture);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ProfilePicture.prototype.renderPlaceholder = function renderPlaceholder() {
        /* eslint-disable max-len */
        switch (this.props.gender) {
            case 'female':
                return _react2.default.createElement('path', {
                    className: moduleClassName('placeholderHead'),
                    fill: '#E6F0FF',
                    d: 'M223.857718,237.529976 C204.471695,227.824601 171.328166,213.111238 171.015273,213.111238 C170.077484,195.580156 159.134236,192.449159 159.134236,192.449159 L158.498643,184.668972 C181.324711,181.318413 195.091131,172.100359 195.091131,172.100359 C195.091131,172.100359 188.212824,169.595919 181.020732,145.803736 C173.829531,122.011554 186.336355,89.1396599 162.57339,62.5297591 C149.984554,48.4331342 137.220997,46.1973456 128,47.2121527 C118.779003,46.1973456 106.015446,48.4331342 93.4266105,62.5297591 C69.6627538,89.1396599 82.1704691,122.011554 74.9783768,145.803736 C67.787176,169.595919 60.9079772,172.100359 60.9079772,172.100359 C60.9079772,172.100359 74.6743977,181.318413 97.5013569,184.668972 L96.8657642,192.449159 C96.8657642,192.449159 85.9225162,195.580156 84.9838358,213.111238 C84.6718338,213.111238 51.528305,227.824601 32.1422824,237.529976 C21.2890693,242.963701 16.7097711,250.455601 15,256 L241,256 C239.290229,250.455601 234.710931,242.963701 223.857718,237.529976'
                });
            case 'male':
                return _react2.default.createElement('path', {
                    className: moduleClassName('placeholderHead'),
                    fill: '#E6F0FF',
                    d: 'M172.789821,125.286248 C172.833297,125.286053 172.876777,125.285858 172.920261,125.285662 C175.128812,125.102554 177.266007,127.350488 175.93026,138.202846 C174.329104,151.202724 170.235714,154.15356 167.692138,154.393204 C162.956545,170.935435 155.957578,178.750888 156.579766,178.750888 C157.49521,178.750888 156.526967,196.212881 156.526967,196.212881 L167.263133,198.876819 C167.263133,198.876819 165.126807,203.019971 167.263133,208.347845 C169.399458,213.674875 171.535783,215.747295 171.535783,215.747295 C171.535783,215.747295 181.913711,220.482808 209.383981,232.321591 C222.562192,238.001337 235.033805,246.679174 240,256 L16,256 C20.9661945,246.679174 33.4369382,238.001337 46.6160193,232.321591 C74.086289,220.482808 84.463347,215.747295 84.463347,215.747295 C84.463347,215.747295 86.5996721,213.674875 88.7359973,208.347845 C90.8731926,203.019971 88.7359973,198.876819 88.7359973,198.876819 L99.4721624,196.212881 C99.4721624,196.212881 98.5039198,178.750888 99.4193634,178.750888 C100.042422,178.750888 93.0364937,170.930372 88.3017707,154.376328 C85.7512334,154.051457 81.765747,150.993457 80.1906967,138.202846 C78.8347416,127.195201 81.0523787,125.03455 83.2945127,125.290134 C83.2464705,124.207658 83.216553,123.117991 83.2051976,122.021771 C79.2459072,114.778295 76.7552858,105.70254 75.7333333,94.7945077 C74.4888889,81.5116581 76.2,67.9269256 80.8666667,54.0403102 C85.5333333,58.2666714 95.0222222,57.9647884 109.333333,53.1346613 C130.8,45.8894707 157.866667,45.8894707 164.4,55.8516078 C168.755556,62.4930326 170,68.2288086 168.133333,73.0589357 C179.955556,80.9078922 184.311111,90.8700294 181.2,102.945347 C179.012078,111.437441 176.208685,118.884408 172.789821,125.286248 Z'
                });
            default:
                return _react2.default.createElement('path', {
                    className: moduleClassName('placeholderHead'),
                    fill: '#E6F0FF',
                    d: 'M81.9983101,120.217725 C81.933107,118.750521 81.9,117.270599 81.9,115.779431 C81.9,78.3458848 91.9496419,48 128.5,48 C165.050358,48 175.1,78.3458848 175.1,115.779431 C175.1,117.269365 175.066948,118.74807 175.001852,120.214081 C175.076254,120.213748 175.150667,120.213414 175.225093,120.21308 C177.52238,120.022866 179.745445,122.358035 178.35603,133.631536 C176.690541,147.135896 172.432684,150.201243 169.786911,150.450187 C164.861049,167.634366 157.580874,175.753111 158.228061,175.753111 C159.180285,175.753111 158.17314,193.892745 158.17314,193.892745 L169.340669,196.660061 C169.340669,196.660061 167.118509,200.963995 169.340669,206.498625 C171.562829,212.03238 173.784988,214.185223 173.784988,214.185223 C173.784988,214.185223 184.579887,219.104506 213.153873,231.402712 C226.861565,237.30287 239.834271,246.317464 245,256 L12,256 C17.1657291,246.317464 30.1375294,237.30287 43.8461273,231.402712 C72.4201131,219.104506 83.2141065,214.185223 83.2141065,214.185223 C83.2141065,214.185223 85.4362661,212.03238 87.6584257,206.498625 C89.8814905,200.963995 87.6584257,196.660061 87.6584257,196.660061 L98.8259546,193.892745 C98.8259546,193.892745 97.8188094,175.753111 98.7710342,175.753111 C99.4191264,175.753111 92.13171,167.629107 87.2067525,150.432656 C84.5537383,150.095179 80.4081208,146.918507 78.7697872,133.631536 C77.3593517,122.196722 79.6660903,119.952223 81.9983101,120.217725 Z'
                });
        }
        /* eslint-enable max-len */
    };

    ProfilePicture.prototype.renderImage = function renderImage() {
        var src = this.props.src;

        var className = moduleClassName('img');

        if (src) {
            return _react2.default.createElement('img', { src: src, className: className });
        }

        return _react2.default.createElement(
            'svg',
            {
                className: className,
                xmlns: 'http://www.w3.org/2000/svg',
                width: '256',
                height: '256',
                viewBox: '0 0 256 256'
            },
            _react2.default.createElement(
                'g',
                { fill: 'none', fillRule: 'evenodd' },
                _react2.default.createElement('rect', { className: moduleClassName('placeholderBg'), width: '256', height: '256', fill: '#3383FE' }),
                this.renderPlaceholder()
            )
        );
    };

    ProfilePicture.prototype.render = function render() {
        var _props = this.props,
            abbreviation = _props.abbreviation,
            color = _props.color,
            children = _props.children,
            stamped = _props.stamped,
            badgeCount = _props.badgeCount,
            onClick = _props.onClick,
            size = _props.size,
            className = _props.className;

        var editable = !!onClick;
        var TagName = editable ? 'a' : 'div';

        var tagProps = {
            href: editable ? '#' : undefined,
            onClick: editable ? (0, _preventDefaultAnd2.default)(onClick) : undefined,
            className: (0, _classnames2.default)(moduleClassName('button'), stamped && moduleClassName('isStamped'))
        };

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(moduleClassName(), (0, _propertyToMCSSstate2.default)(moduleClassName(), size), className) },
            _react2.default.createElement(
                TagName,
                tagProps,
                !!abbreviation ? _react2.default.createElement(
                    'div',
                    {
                        className: moduleClassName('abbreviation'),
                        style: {
                            backgroundColor: color
                        }
                    },
                    abbreviation
                ) : this.renderImage(),
                editable && _react2.default.createElement(_Icon2.default, { type: 'edit', className: moduleClassName('editIcon') })
            ),
            badgeCount !== undefined && _react2.default.createElement(_Badge2.default, {
                count: badgeCount,
                className: moduleClassName('badge'),
                size: size === 'large' ? size : 'medium',
                color: 'yellow'
            }),
            !!children && _react2.default.createElement(
                'div',
                { className: moduleClassName('content') },
                children
            )
        );
    };

    return ProfilePicture;
}(_react.Component);

ProfilePicture.propTypes = {
    src: _propTypes2.default.string,
    stamped: _propTypes2.default.bool,
    abbreviation: _propTypes2.default.string,
    color: _propTypes2.default.string,
    size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
    className: _propTypes2.default.string,
    gender: _propTypes2.default.oneOf(placeholderGenderTypes),
    badgeCount: _propTypes2.default.number,
    onClick: _propTypes2.default.func
};
ProfilePicture.defaultProps = {
    size: 'medium',
    gender: placeholderGenderTypes[0]
};
exports.default = ProfilePicture;