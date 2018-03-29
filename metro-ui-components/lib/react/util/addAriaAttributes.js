'use strict';

exports.__esModule = true;
exports.default = addAriaAttributes;
/*
 * addAriaAttributes(extend, properties)
 *
 * Extends the `extend` object with `aria-*` and `*` keys,
 * based on its appearance within the properties object
 *
 * e.g. addAriaAttributes({ className: 'x' }, { required: true })
 * would extend the first argument to become { className: 'x', required: true, 'aria-required': true }
 */

var ariaAttributes = ['readOnly', 'required'];
var htmlAttributes = {
    readOnly: 'readOnly',
    required: 'required'
};

function addAriaAttributes(extend, properties) {
    return ariaAttributes.filter(function (attrName) {
        return properties.hasOwnProperty(attrName);
    }).reduce(function (newProperties, attrName) {
        newProperties['aria-' + attrName.toLowerCase()] = properties[attrName];
        if (htmlAttributes[attrName] && extend[attrName]) {
            newProperties[attrName] = htmlAttributes[attrName];
        }
        return newProperties;
    }, extend);
}