"use strict";

exports.__esModule = true;
exports.default = propertyToMCSSstate;
var toCamelCase = function toCamelCase(string) {
    return string.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
};

var toCapitalCase = function toCapitalCase(string) {
    return "" + string.substring(0, 1).toUpperCase() + string.substring(1);
};

function propertyToMCSSstate(base, property) {
    return base + "-is" + toCapitalCase(toCamelCase(property));
}