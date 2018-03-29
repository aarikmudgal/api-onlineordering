'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _FullscreenDropzone = require('./FullscreenDropzone');

var _FullscreenDropzone2 = _interopRequireDefault(_FullscreenDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    label: 'my label'
};

describe('FullscreenDropzone', function () {
    it('renders without breaking', function () {
        var renderWrapper = function renderWrapper() {
            return (0, _enzyme.mount)(_react2.default.createElement(_FullscreenDropzone2.default, defaultProps));
        };

        expect(renderWrapper).not.toThrow();
    });

    describe('when dragenter has been triggered', function () {
        var wrapper = void 0;

        beforeEach(function () {
            wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FullscreenDropzone2.default, defaultProps));

            var DragEnterEvent = new Event('dragenter');

            window.dispatchEvent(DragEnterEvent);

            wrapper.instance().forceUpdate();
            wrapper.update();
        });

        it('is visible', function () {
            expect(wrapper.find('.m-fullscreenDropzone-isVisible').length).toBe(1);
        });

        it('hides on mouseout', function () {
            var event = new Event('mouseout');

            window.dispatchEvent(event);

            wrapper.instance().forceUpdate();
            wrapper.update();

            expect(wrapper.find('.m-fullscreenDropzone-isVisible').length).toBe(0);
        });

        it('hides on blur', function () {
            var event = new Event('blur');

            window.dispatchEvent(event);

            wrapper.instance().forceUpdate();
            wrapper.update();

            expect(wrapper.find('.m-fullscreenDropzone-isVisible').length).toBe(0);
        });

        it('hides on esc keydown', function () {
            var event = new KeyboardEvent('keydown', {
                keyCode: 27
            });

            window.dispatchEvent(event, {
                keyCode: 27
            });

            wrapper.instance().forceUpdate();
            wrapper.update();

            expect(wrapper.find('.m-fullscreenDropzone-isVisible').length).toBe(0);
        });
    });
});