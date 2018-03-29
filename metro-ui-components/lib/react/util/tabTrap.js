'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./tabTrap.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Higher order component, used to disable tabbing outside of it's children
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Use
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var cssBaseClass = 'tab-trap',
    KEY_DOWN_EVENT = 'keydown',
    TAB_KEY_CODE = 9;

function preventDefault(e) {
    e.preventDefault();
}

exports.default = function (ComposedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
        _inherits(TabTrap, _Component);

        function TabTrap(props) {
            _classCallCheck(this, TabTrap);

            var _this = _possibleConstructorReturn(this, _Component.call(this, props));

            _this.handleInnerKeyDown = _this.handleInnerKeyDown.bind(_this);
            _this.handleOuterKeyDown = _this.handleOuterKeyDown.bind(_this);
            _this.enableTabbing = _this.enableTabbing.bind(_this);
            _this.disableTabbing = _this.disableTabbing.bind(_this);
            return _this;
        }

        TabTrap.prototype.componentDidMount = function componentDidMount() {
            this.disableTabbing();

            if (this._immediateDisable) {
                this._immediateDisable = false;
            }
        };

        TabTrap.prototype.componentWillUnmount = function componentWillUnmount() {
            this._immediateDisable = false;
            this.enableTabbing();
        };

        TabTrap.prototype.handleInnerKeyDown = function handleInnerKeyDown(event) {
            if (event.keyCode !== TAB_KEY_CODE) {
                return;
            }

            event.stopPropagation();

            if (!event.shiftKey && event.target === this.refs.tabTrapEnd) {
                preventDefault(event);
                this.refs.tabTrapBegin.focus(1);
            } else if (event.shiftKey && event.target === this.refs.tabTrapBegin) {
                preventDefault(event);
                this.refs.tabTrapEnd.focus(1);
            }
        };

        TabTrap.prototype.handleOuterKeyDown = function handleOuterKeyDown(event) {
            if (event.keyCode !== TAB_KEY_CODE) {
                return;
            }

            if (event.shiftKey && this.refs.tabTrapEnd) {
                this.refs.tabTrapEnd.focus(1);
            } else if (this.refs.tabTrapBegin) {
                this.refs.tabTrapBegin.focus(1);
            }
        };

        TabTrap.prototype.disableTabbing = function disableTabbing() {
            var _this2 = this;

            document.body.addEventListener(KEY_DOWN_EVENT, this.handleOuterKeyDown);

            if (!this.refs.tabTrap) {
                // ComposedComponent immediatly called disableTabbing
                // but TabTraps ref has not been rendered yet: call when mounted
                this._immediateDisable = true;
            } else {
                this.refs.tabTrap.addEventListener(KEY_DOWN_EVENT, this.handleInnerKeyDown);
            }

            setTimeout(function () {
                if (_this2.refs.tabTrapBegin) {
                    _this2.refs.tabTrapBegin.focus();
                }
            }, 200);
        };

        TabTrap.prototype.enableTabbing = function enableTabbing() {
            document.body.removeEventListener(KEY_DOWN_EVENT, this.handleOuterKeyDown);

            if (this.refs.tabTrap) {
                this.refs.tabTrap.removeEventListener(KEY_DOWN_EVENT, this.handleInnerKeyDown);
            }
        };

        TabTrap.prototype.renderTabTrap = function renderTabTrap() {
            var isEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            return _react2.default.createElement(
                'a',
                {
                    ref: isEnd ? 'tabTrapEnd' : 'tabTrapBegin',
                    className: cssBaseClass,
                    href: '#',
                    onClick: preventDefault
                },
                'tabtrap'
            );
        };

        TabTrap.prototype.renderTabTrapBegin = function renderTabTrapBegin() {
            return this.renderTabTrap();
        };

        TabTrap.prototype.renderTabTrapEnd = function renderTabTrapEnd() {
            return this.renderTabTrap(true);
        };

        TabTrap.prototype.render = function render() {
            return _react2.default.createElement(
                ComposedComponent,
                this.props,
                _react2.default.createElement(
                    'div',
                    { ref: 'tabTrap', className: 'tab-trap-root' },
                    this.renderTabTrapBegin(),
                    this.props.children,
                    this.renderTabTrapEnd()
                )
            );
        };

        return TabTrap;
    }(_react.Component), _class.displayName = ComposedComponent.displayName || ComposedComponent.name, _temp;
};