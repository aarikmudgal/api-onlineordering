'use strict';

exports.__esModule = true;
exports.default = scrollTop;
function scrollTop(target, val) {
    if (val !== undefined) {
        return target.scrollTo(0, val);
    }

    /* eslint-disable no-nested-ternary */
    return 'scrollTop' in target ? target.scrollTop : 'pageYOffset' in target ? target.pageYOffset : target.document.documentElement.pageYOffset;
}