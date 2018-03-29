'use strict';

exports.__esModule = true;
exports.default = withBackground;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COLORS = {
    blue: 'bg-blue-tint-95',
    metroBlue: 'grad-metro-blue',
    grey: 'bg-grey-tint-95'
};

var WithBackground = function (_Component) {
    _inherits(WithBackground, _Component);

    function WithBackground() {
        _classCallCheck(this, WithBackground);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    WithBackground.prototype.componentDidMount = function componentDidMount() {
        document.body.classList.add(COLORS[this.props.color]);
    };

    WithBackground.prototype.componentWillUnmount = function componentWillUnmount() {
        document.body.classList.remove(COLORS[this.props.color]);
    };

    WithBackground.prototype.render = function render() {
        return this.props.children;
    };

    return WithBackground;
}(_react.Component);

WithBackground.propTypes = {
    color: _propTypes2.default.oneOf(Object.keys(COLORS))
};
WithBackground.defaultProps = {
    color: 'blue'
};


function wrapChild(storyFn, context, options) {
    return function () {
        return _react2.default.createElement(
            WithBackground,
            options,
            storyFn({ context: context })
        );
    };
}

function withBackground(options) {
    return function (storyFn, context) {
        return wrapChild(storyFn, context, options);
    };
}