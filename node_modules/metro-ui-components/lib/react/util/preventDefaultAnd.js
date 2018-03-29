"use strict";

exports.__esModule = true;
var preventDefaultAnd = function preventDefaultAnd(callback) {
    return function (e) {
        e.preventDefault();
        return callback(e);
    };
};

exports.default = preventDefaultAnd;