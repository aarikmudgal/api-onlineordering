'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _IconLink = require('./IconLink');

var _IconLink2 = _interopRequireDefault(_IconLink);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe.only('IconLink', function () {
    // eslint-disable-line max-statements
    it('renders a link', function () {
        var link = (0, _enzyme.shallow)(_react2.default.createElement(
            _IconLink2.default,
            {
                type: 'trash'
            },
            'My icon link'
        ));

        expect(link.is('a')).toBe(true);
    });

    it('renders the correct icon type', function () {
        var link = (0, _enzyme.shallow)(_react2.default.createElement(
            _IconLink2.default,
            {
                type: 'trash'
            },
            'My icon link'
        ));

        expect(link.find(_Icon2.default).props().type).toBe('trash');
    });

    it('renders the icon before the children', function () {
        var link = (0, _enzyme.shallow)(_react2.default.createElement(
            _IconLink2.default,
            {
                type: 'trash'
            },
            'My icon link'
        ));

        expect(link.childAt(0).type()).toBe(_Icon2.default);
    });

    it('puts the icon behind the children when using `reverse`', function () {
        var link = (0, _enzyme.shallow)(_react2.default.createElement(
            _IconLink2.default,
            {
                type: 'trash',
                reverse: true
            },
            'My icon link'
        ));

        expect(link.childAt(0).text()).toBe('My icon link');
    });

    it('puts through any other props to the link tag', function () {
        var extraProps = {
            href: '#my-href',
            target: '_blank',
            rel: '_'
        };
        var link = (0, _enzyme.shallow)(_react2.default.createElement(
            _IconLink2.default,
            _extends({
                type: 'add'
            }, extraProps),
            'My icon link'
        ));

        expect(link.props()).toMatchObject(extraProps);
    });
});