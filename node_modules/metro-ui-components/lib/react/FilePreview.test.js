'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _FilePreview = require('./FilePreview');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FilePreview', function () {
    var defaultProps = void 0;

    beforeEach(function () {
        defaultProps = {
            ratio: 224 / 152,
            label: 'Document o file label',
            iconType: 'trash',
            onIconClick: jest.fn(),
            onClick: jest.fn(),
            src: '/image.jpg'
            // src: 'https://lorempixel.com/output/food-q-c-400-400-5.jpg'
        };
    });

    it('renders without throwing', function () {
        var renderWrapper = function renderWrapper() {
            return (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview, defaultProps));
        };

        expect(renderWrapper).not.toThrow();
    });

    it('resizes wrapper by ratio', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview, defaultProps));

        expect(wrapper.children().instance().style.paddingTop).toBe(defaultProps.ratio * 100 + '%');
    });

    it('renders a loading spinner', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview, _extends({}, defaultProps, {
            loading: true
        })));

        expect(wrapper.find(_Spinner2.default)).toBeTruthy();
    });

    it('handles onClick', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview, defaultProps));

        wrapper.find('.m-filePreview-image').simulate('click');

        expect(defaultProps.onClick.mock.calls.length).toBe(1);
    });

    it('renders no Icon while loading', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview, _extends({}, defaultProps, {
            loading: true
        })));

        expect(wrapper.find(_Icon2.default).length).toBe(0);
    });

    it('renders an icon', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview, defaultProps));

        expect(wrapper.find(_Icon2.default).props().type).toBe(defaultProps.iconType);
    });

    it('renders a clickable action button', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview, defaultProps));

        wrapper.find('.m-filePreview-action').simulate('click');

        expect(defaultProps.onIconClick.mock.calls.length).toBe(1);
    });

    describe('FilePreview.Button', function () {
        beforeEach(function () {
            defaultProps = {
                ratio: 224 / 152,
                label: 'Document o file label',
                iconType: 'trash',
                onClick: jest.fn()
            };
        });

        it('renders without throwing', function () {
            var renderWrapper = function renderWrapper() {
                return (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview.Button, defaultProps));
            };

            expect(renderWrapper).not.toThrow();
        });

        it('handles click events', function () {
            var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview.Button, defaultProps));

            wrapper.simulate('click');

            expect(defaultProps.onClick.mock.calls.length).toBe(1);
        });

        it('resizes wrapper by ratio', function () {
            var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FilePreview.FilePreview, defaultProps));

            expect(wrapper.children().instance().style.paddingTop).toBe(defaultProps.ratio * 100 + '%');
        });
    });
});