'use strict';

exports.__esModule = true;
exports.FilePreview = FilePreview;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./FilePreview.css'); }

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _moduleClassNameFactory = require('./util/moduleClassNameFactory');

var _moduleClassNameFactory2 = _interopRequireDefault(_moduleClassNameFactory);

var _withSrcLoader = require('./util/withSrcLoader');

var _withSrcLoader2 = _interopRequireDefault(_withSrcLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleClassName = (0, _moduleClassNameFactory2.default)('m-filePreview');

function FilePreview(props) {
    var className = props.className,
        onClick = props.onClick,
        href = props.href,
        title = props.title,
        iconType = props.iconType,
        onIconClick = props.onIconClick,
        src = props.src,
        label = props.label,
        loading = props.loading,
        ratio = props.ratio;


    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(moduleClassName(), className), style: { paddingTop: ratio * 100 + '%' } },
        loading ? _react2.default.createElement(_Spinner2.default, null) : _react2.default.createElement(
            'a',
            { href: href, title: title, onClick: onClick, className: moduleClassName('image') },
            _react2.default.createElement('img', { src: src, alt: label })
        ),
        !loading && (label || iconType) && _react2.default.createElement(
            'div',
            { className: moduleClassName('label') },
            _react2.default.createElement(
                'div',
                { className: moduleClassName('labelText') },
                label
            ),
            !!iconType && _react2.default.createElement(
                'button',
                { type: 'button', className: moduleClassName('action'), onClick: onIconClick },
                _react2.default.createElement(_Icon2.default, { type: iconType, className: moduleClassName('icon') })
            )
        )
    );
}

FilePreview.propTypes = {
    onClick: _propTypes2.default.func,
    href: _propTypes2.default.string,
    title: _propTypes2.default.string,
    className: _propTypes2.default.string,
    iconType: _Icon2.default.propTypes.type,
    onIconClick: _propTypes2.default.func,
    src: _propTypes2.default.string,
    label: _propTypes2.default.string,
    loading: _propTypes2.default.bool,
    ratio: _propTypes2.default.number
};

FilePreview.defaultProps = {
    ratio: 224 / 152,
    href: '#'
};

var FilePreviewWithSrcLoader = (0, _withSrcLoader2.default)(FilePreview);

exports.default = FilePreviewWithSrcLoader;


var FilePreviewButton = function FilePreviewButton(_ref) {
    var onClick = _ref.onClick,
        label = _ref.label,
        iconType = _ref.iconType,
        ratio = _ref.ratio,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        'button',
        {
            type: 'button',
            onClick: onClick,
            className: (0, _classnames2.default)(moduleClassName('button'), className),
            style: { paddingTop: ratio * 100 + '%' }
        },
        _react2.default.createElement(
            'div',
            { className: moduleClassName('buttonContent') },
            _react2.default.createElement(_Icon2.default, { type: iconType }),
            _react2.default.createElement('br', null),
            label,
            children
        )
    );
};

FilePreviewButton.propTypes = {
    onClick: _propTypes2.default.func,
    className: _propTypes2.default.string,
    iconType: _Icon2.default.propTypes.type,
    label: _propTypes2.default.string,
    ratio: _propTypes2.default.number
};
FilePreviewButton.defaultProps = {
    ratio: 224 / 152
};

FilePreviewButton.displayName = 'FilePreview.Button';

FilePreviewWithSrcLoader.Button = FilePreviewButton;
FilePreview.Button = FilePreviewButton;