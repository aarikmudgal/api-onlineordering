'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _SidebarNavigation = require('./SidebarNavigation');

var _SidebarNavigation2 = _interopRequireDefault(_SidebarNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SidebarNavigation', function () {
    it('filters falsy children before rendering', function () {
        var renderLabel = function renderLabel() {
            return (0, _enzyme.render)(_react2.default.createElement(
                _SidebarNavigation2.default,
                null,
                _react2.default.createElement(
                    _SidebarNavigation2.default.Title,
                    null,
                    'Sidebar Navigation Title'
                ),
                false,
                undefined,
                _react2.default.createElement(
                    _SidebarNavigation2.default.Link,
                    { iconType: 'group', href: '#' },
                    'Staff & Permission'
                )
            ));
        };

        expect(renderLabel).not.toThrow();
    });
});