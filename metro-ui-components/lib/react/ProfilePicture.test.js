'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ProfilePicture = require('./ProfilePicture');

var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ProfilePicture', function () {
    it('renders image', function () {
        var src = 'a-source.jpg';
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ProfilePicture2.default, { src: src }));

        expect(wrapper.find('img').props().src).toBe(src);
    });

    it('renders placeholder svg if no src given', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ProfilePicture2.default, null));

        expect(wrapper.find('.m-profilePicture-img').name()).toBe('svg');
    });

    it('adds stamped class', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ProfilePicture2.default, null));

        expect(wrapper.find('.m-profilePicture-isStamped')).toBeTruthy();
    });

    it('renders link when onClick is given', function () {
        var onClick = jest.fn();
        var preventDefault = jest.fn();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ProfilePicture2.default, { onClick: onClick }));

        var link = wrapper.find('a');

        expect(link).toBeTruthy();

        link.simulate('click', {
            preventDefault: preventDefault
        });

        expect(onClick.mock.calls.length).toBe(1);
        expect(preventDefault.mock.calls.length).toBe(1);
    });

    it('renders a background-color for abbreviations', function () {
        var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_ProfilePicture2.default, { color: '#8f3dd1', abbreviation: 'Cy' }));

        expect(wrapper.find('.m-profilePicture-abbreviation').props().style.backgroundColor).toBe('#8f3dd1');
    });
});