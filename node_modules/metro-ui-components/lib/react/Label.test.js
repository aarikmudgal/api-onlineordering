'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shallowLabel = function shallowLabel(props) {
    return (0, _enzyme.shallow)(_react2.default.createElement(_Label2.default, props));
};

describe('Label', function () {
    it('renders link', function () {
        var onLinkClick = function onLinkClick() {};
        var label = shallowLabel({
            htmlFor: 'test',
            label: 'Test label',
            link: 'Mein test link',
            onLinkClick: onLinkClick
        });

        expect(label.find('.m-label-link').text()).toBe('Mein test link');
    });

    it('Label renders linkNode instead of text', function () {
        var linkNode = _react2.default.createElement(
            'a',
            { key: 'key-somewhow-required-for-enzyme', href: '#', id: 'link-node', className: 'link-node' },
            'Test'
        );

        var label = (0, _enzyme.render)(_react2.default.createElement(_Label2.default, {
            htmlFor: 'test',
            label: 'Test label',
            link: linkNode
        }));

        expect(label.find('#link-node')).toBeTruthy();
    });
});