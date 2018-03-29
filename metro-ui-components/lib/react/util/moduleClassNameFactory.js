'use strict';

exports.__esModule = true;

exports.default = function (cssModuleName) {
    return function (addon) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        return [addon ? cssModuleName + '-' + addon : cssModuleName].concat(rest).join(' ');
    };
};