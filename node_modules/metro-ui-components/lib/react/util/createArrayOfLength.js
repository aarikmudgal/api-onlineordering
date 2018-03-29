"use strict";

exports.__esModule = true;
exports.default = createArrayOfLength;
function createArrayOfLength(length, fillWith) {
    var array = [];

    for (var i = 0; i < length; i++) {
        // eslint-disable-line no-plusplus
        array.push(fillWith);
    }

    return array;
}