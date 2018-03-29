'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _MicroAnimation = require('./MicroAnimation');

var _MicroAnimation2 = _interopRequireDefault(_MicroAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MicroAnimation', function () {
    var setTimeoutOriginal = void 0;

    it('renders without breaking', function () {
        var renderWrapper = function renderWrapper() {
            return (0, _enzyme.mount)(_react2.default.createElement(_MicroAnimation2.default, null));
        };

        expect(renderWrapper).not.toThrow();
    });

    beforeEach(function () {
        setTimeoutOriginal = global.setTimeout;
        global.setTimeout = jest.fn();
    });

    afterEach(function () {
        global.setTimeout = setTimeoutOriginal;
    });

    it('does not play without props.play', function () {
        var onDone = jest.fn();
        var type = 'pulse';

        (0, _enzyme.mount)( // eslint-disable-line no-unused
        _react2.default.createElement(_MicroAnimation2.default, { type: type, onDone: onDone }));

        expect(global.setTimeout.mock.calls.length).toBe(0);
    });

    it('immediatly plays animation', function () {
        var onDone = jest.fn();
        var type = 'pulse';

        (0, _enzyme.mount)( // eslint-disable-line no-unused
        _react2.default.createElement(_MicroAnimation2.default, { play: true, type: type, onDone: onDone }));

        expect(global.setTimeout.mock.calls.length).toBe(1);
        expect(global.setTimeout.mock.calls[0][0]).toBe(onDone);
        expect(global.setTimeout.mock.calls[0][1]).toBe((0, _MicroAnimation.getMicroAnimation)(type).timeout);
    });

    it('plays animation after prop.play changes', function () {
        var onDone = jest.fn();
        var type = 'pulse';

        var wrapper = (0, _enzyme.mount)( // eslint-disable-line no-unused
        _react2.default.createElement(_MicroAnimation2.default, { type: type, onDone: onDone }));

        wrapper.setProps({ play: true });

        expect(global.setTimeout.mock.calls.length).toBe(1);
    });
});