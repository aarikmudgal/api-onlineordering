'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _SuggestionField = require('./SuggestionField');

var _SuggestionField2 = _interopRequireDefault(_SuggestionField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
    name: 'test',
    id: 'test',
    label: 'Test label',
    onSearch: function onSearch() {},
    onSelect: function onSelect() {},
    value: 'val'
};

var shallowInput = function shallowInput() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _enzyme.shallow)(_react2.default.createElement(_SuggestionField2.default, _extends({
        type: 'text'
    }, defaultProps, props)));
};

describe('Input', function () {
    // eslint-disable-line max-statements
    it('has controlled value', function () {
        var input = shallowInput();

        expect(input.find('#test').props().value).toEqual('val');

        input.setProps({ value: 'value' });

        expect(input.find('#test').props().value).toEqual('value');
    });

    it('calls onSearch', function () {
        var onSearchMock = jest.fn();

        onSearchMock.mockImplementation(function () {
            return Promise.resolve([]);
        });

        var input = shallowInput({
            onSearch: onSearchMock
        });

        input.find(_Input2.default).simulate('change', { target: { value: 'ohMy' } }, 'ohMy');

        expect(onSearchMock.mock.calls.length).toBe(1);
        expect(onSearchMock.mock.calls[0][0]).toBe('ohMy');
    });

    it('calls onSelect with the clicked result', function () {
        // eslint-disable-line max-statements
        var mockResults = [{ name: 'Result 1', value: 'result-1' }, { name: 'Result 2', value: 'result-2' }];

        var onSearchMock = jest.fn();
        var onSelectMock = jest.fn();
        var input = shallowInput({
            onSearch: onSearchMock,
            onSelect: onSelectMock
        });
        var inputElement = input.find(_Input2.default);

        onSearchMock.mockImplementation(function () {
            return {
                then: function then(fn) {
                    return fn(mockResults);
                }
            };
        });

        inputElement.simulate('change', { target: { value: 'Result' } }, 'Result');

        expect(onSearchMock.mock.calls.length).toBe(1);

        input.setState({
            showSuggestions: true
        });
        input.update();
        expect(input.find('.m-suggestionField-item').length).toBe(2);

        input.find('.m-suggestionField-item a').last().simulate('click');

        expect(onSelectMock.mock.calls.length).toBe(1);
        expect(onSelectMock.mock.calls[0][0]).toBe(mockResults[mockResults.length - 1]);
    });

    it('limits the rendered results', function () {
        // eslint-disable-line max-statements
        var mockResults = Array.from(new Array(30)).map(function (nothing, index) {
            return {
                name: 'Result ' + index,
                value: 'result-' + index
            };
        });
        var maxResults = 10;

        var onSearchMock = jest.fn();
        var input = shallowInput({
            onSearch: onSearchMock,
            maxResults: maxResults
        });
        var inputElement = input.find(_Input2.default);

        onSearchMock.mockImplementation(function () {
            return {
                then: function then(fn) {
                    return fn(mockResults);
                }
            };
        });

        inputElement.simulate('change', { target: { value: 'Result' } }, 'Result');

        input.setState({
            showSuggestions: true
        });
        input.update();

        expect(onSearchMock.mock.calls.length).toBe(1);

        expect(input.find('.m-suggestionField-item').length).toBe(maxResults);
    });

    /* const eventHandlerTest = (eventName, eventHandlerName, value) => {
        it(`handles ${eventHandlerName}`, () => {
            const handlerMock = jest.fn();
            const wrapper = shallowInput({
                id: 'test-id',
                name: 'name',
                label: 'label',
                [eventHandlerName]: handlerMock
            });
            const eventMock = { target: { value: value } };
            const input = wrapper.find('input.m-input-element');
             input.simulate(eventName, eventMock);
             expect(handlerMock.mock.calls.length).toBe(1);
             if (value) {
                expect(handlerMock.mock.calls[0][0]).toBe(eventMock);
                expect(handlerMock.mock.calls[0][1]).toBe(value);
            }
        });
    };
     eventHandlerTest('change', 'onChange', 'look a string');
    eventHandlerTest('blur', 'onBlur', 'look a string');
    eventHandlerTest('focus', 'onFocus', 'look a string');
    eventHandlerTest('keyup', 'onKeyUp', 'look a string');
    eventHandlerTest('keydown', 'onKeyDown', 'look a string');
    eventHandlerTest('mouseleave', 'onMouseLeave');
    eventHandlerTest('mouseenter', 'onMouseEnter');
    eventHandlerTest('touchstart', 'onTouchStart');
    */
});