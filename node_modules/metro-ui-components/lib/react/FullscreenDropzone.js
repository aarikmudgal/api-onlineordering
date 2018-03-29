'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./FullscreenDropzone.css'); }

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-fullscreenDropzone');

var propTypes = {
    label: _propTypes2.default.string.isRequired,
    className: _propTypes2.default.string
};

var blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

var isBrowserBlackListed = function isBrowserBlackListed() {
    return blacklistedBrowsers.reduce(function (isBlackListed, regex) {
        return isBlackListed || regex.test(navigator.userAgent);
    }, false);
};

var isBrowserSupported = function () {
    if (process.env.ALEX_UI_IGNORE_CSS) {
        return true;
    }

    var capableBrowser = void 0;

    capableBrowser = true;

    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData) {
        if (!('classList' in document.createElement('a'))) {
            capableBrowser = false;
        } else if (isBrowserBlackListed()) {
            capableBrowser = false;
        }
    } else {
        capableBrowser = false;
    }

    return capableBrowser;
}();

var filterEscKey = function filterEscKey(fn) {
    return function (e) {
        if (e.keyCode === 27) {
            fn(e);
        }
    };
};

var FullscreenDroppable = function (_Component) {
    _inherits(FullscreenDroppable, _Component);

    function FullscreenDroppable(props) {
        _classCallCheck(this, FullscreenDroppable);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleDragEnter = _this.handleDragEnter.bind(_this);
        _this.handleDragOver = _this.handleDragOver.bind(_this);
        _this.handleDragLeave = _this.handleDragLeave.bind(_this);
        _this.handleDrop = _this.handleDrop.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        _this.handleEsc = filterEscKey(_this.handleCancel);

        _this.state = {
            visible: false
        };
        return _this;
    }

    FullscreenDroppable.prototype.componentDidMount = function componentDidMount() {
        if (isBrowserSupported) {
            this.addEventListeners();
        }
    };

    FullscreenDroppable.prototype.componentWillUnmount = function componentWillUnmount() {
        if (isBrowserSupported) {
            this.removeEventListeners();
        }
    };

    FullscreenDroppable.prototype.addEventListeners = function addEventListeners() {
        window.addEventListener('dragenter', this.handleDragEnter);

        if (this.refs.zone) {
            this.refs.zone.addEventListener('dragover', this.handleDragOver);
            this.refs.zone.addEventListener('dragleave', this.handleDragLeave);
            this.refs.zone.addEventListener('drop', this.handleDrop);
            this.refs.zone.addEventListener('dragend', this.handleDrop);
        }
    };

    FullscreenDroppable.prototype.removeEventListeners = function removeEventListeners() {
        window.removeEventListener('dragenter', this.handleDragEnter);

        if (this.refs.zone) {
            this.refs.zone.removeEventListener('dragover', this.handleDragOver);
            this.refs.zone.removeEventListener('dragleave', this.handleDragLeave);
            this.refs.zone.removeEventListener('drop', this.handleDrop);
            this.refs.zone.removeEventListener('dragend', this.handleDrop);
        }
    };

    FullscreenDroppable.prototype.handleDragOver = function handleDragOver(e) {
        e.dataTransfer.dropEffect = 'copy';

        return false;
    };

    FullscreenDroppable.prototype.handleDragEnter = function handleDragEnter(e) {
        e.stopPropagation();
        e.preventDefault();

        window.addEventListener('mouseout', this.handleCancel);
        window.addEventListener('blur', this.handleCancel);
        window.addEventListener('keydown', this.handleEsc);

        this.setState({
            visible: true
        });
    };

    FullscreenDroppable.prototype.handleDragLeave = function handleDragLeave(e) {
        if (e.target === this.refs.zone) {
            e.stopPropagation();
            e.preventDefault();

            this.handleCancel();
        }
    };

    FullscreenDroppable.prototype.handleDrop = function handleDrop(e) {
        e.preventDefault();

        this.handleCancel();
    };

    FullscreenDroppable.prototype.handleCancel = function handleCancel() {
        window.removeEventListener('mouseout', this.handleCancel);
        window.removeEventListener('blur', this.handleCancel);
        window.removeEventListener('keydown', this.handleEsc);

        this.setState({
            visible: false
        });
    };

    FullscreenDroppable.prototype.render = function render() {
        if (!isBrowserSupported) {
            return null;
        }

        var _props = this.props,
            label = _props.label,
            children = _props.children,
            className = _props.className,
            cssClasses = [moduleClassName(), className];


        if (this.state.visible) {
            cssClasses.push(moduleClassName('isVisible'));
        }

        return _react2.default.createElement(
            'div',
            _extends({ ref: 'zone', className: (0, _classnames2.default)(cssClasses) }, this.props),
            _react2.default.createElement(
                'div',
                { className: moduleClassName('content') },
                _react2.default.createElement(_Icon2.default, { type: 'drag-drop-large', size: 5, color: 'white' }),
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('label') },
                    label
                ),
                _react2.default.createElement(
                    'div',
                    { className: moduleClassName('children') },
                    children
                )
            )
        );
    };

    return FullscreenDroppable;
}(_react.Component);

exports.default = FullscreenDroppable;


FullscreenDroppable.propTypes = propTypes;