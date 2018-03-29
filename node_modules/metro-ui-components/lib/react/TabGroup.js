'use strict';

exports.__esModule = true;
exports.TabPanel = exports.TabContents = exports.TabList = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./TabGroup.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cssBaseClass = 'm-tabPanel';

var TabList = exports.TabList = function (_Component) {
    _inherits(TabList, _Component);

    function TabList(props) {
        _classCallCheck(this, TabList);

        return _possibleConstructorReturn(this, _Component.call(this, props));
    }

    TabList.prototype.render = function render() {
        var _classnames;

        var _props = this.props,
            activeTab = _props.activeTab,
            children = _props.children,
            orientation = _props.orientation,
            sticky = _props.sticky;


        return _react2.default.createElement(
            'div',
            { className: (0, _classnames4.default)((_classnames = {}, _classnames[cssBaseClass + '-list'] = true, _classnames[cssBaseClass + '-list-isSticky'] = sticky, _classnames)), role: 'tablist', 'aria-orientation': orientation },
            _react2.default.Children.map(children, function (child) {
                var _classnames2;

                return _react2.default.cloneElement(child, {
                    role: 'tab',
                    className: (0, _classnames4.default)((_classnames2 = {}, _classnames2[cssBaseClass + '-tab'] = true, _classnames2[cssBaseClass + '-tab-selected'] = child.props.name === activeTab, _classnames2[child.props.className] = !!child.props.className, _classnames2)),
                    'aria-selected': child.props.name === activeTab
                });
            })
        );
    };

    return TabList;
}(_react.Component);

TabList.propTypes = {
    activeTab: _propTypes2.default.any,
    sticky: _propTypes2.default.bool,
    orientation: _propTypes2.default.oneOf(['horizontal' // vertical not yet supported
    ])
};
TabList.defaultProps = {
    sticky: false,
    orientation: 'horizontal'
};
TabList.displayName = 'TabGroup.TabList';

var TabContents = exports.TabContents = function (_Component2) {
    _inherits(TabContents, _Component2);

    function TabContents() {
        _classCallCheck(this, TabContents);

        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
    }

    // eslint-disable-line react/no-multi-comp
    TabContents.prototype.render = function render() {
        var _props2 = this.props,
            activeTab = _props2.activeTab,
            children = _props2.children;


        var activeChild = _react2.default.Children.toArray(children).find(function (child) {
            return child.props.name === activeTab;
        });

        if (activeChild) {
            return activeChild;
        }

        return _react2.default.createElement(
            'div',
            null,
            children
        );
    };

    return TabContents;
}(_react.Component);

TabContents.propTypes = {
    activeTab: _propTypes2.default.any
};
TabContents.displayName = 'TabGroup.TabContents';

var TabPanel = exports.TabPanel = function (_Component3) {
    _inherits(TabPanel, _Component3);

    function TabPanel() {
        _classCallCheck(this, TabPanel);

        return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
    }

    TabPanel.prototype.render = function render() {
        var _props3 = this.props,
            children = _props3.children,
            padded = _props3.padded;


        return _react2.default.createElement(
            'div',
            {
                className: (0, _classnames4.default)(cssBaseClass, padded && cssBaseClass + '-isPadded'),
                role: 'tabpanel'
            },
            children
        );
    }; // eslint-disable-line react/no-multi-comp


    return TabPanel;
}(_react.Component);

TabPanel.propTypes = {
    padded: _propTypes2.default.bool,
    name: _propTypes2.default.any.isRequired
};
TabPanel.defaultProps = {
    padded: true
};
TabPanel.displayName = 'TabGroup.TabPanel';
exports.default = {
    TabList: TabList,
    TabContents: TabContents,
    TabPanel: TabPanel
};