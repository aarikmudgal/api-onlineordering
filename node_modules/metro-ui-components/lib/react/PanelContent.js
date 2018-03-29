'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelContent = function (_Component) {
    _inherits(PanelContent, _Component);

    function PanelContent() {
        _classCallCheck(this, PanelContent);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    PanelContent.prototype.render = function render() {
        var className = this.props.className;


        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('m-panel-content', className) },
            this.wrappedChildren()
        );
    };

    PanelContent.prototype.wrappedChildren = function wrappedChildren() {
        var _props = this.props,
            padded = _props.padded,
            children = _props.children;


        if (padded) {
            return _react2.default.createElement(
                'div',
                { className: 'm-panel-contentPadding' },
                children
            );
        }

        return children;
    };

    return PanelContent;
}(_react.Component);

PanelContent.displayName = 'Panel.Content';
PanelContent.propTypes = {
    padded: _propTypes2.default.bool,
    className: _propTypes2.default.string
};
PanelContent.defaultProps = {
    padded: true
};
exports.default = PanelContent;