'use strict';

exports.__esModule = true;

var _SelectSearchable = require('./SelectSearchable');

var _SelectSearchable2 = _interopRequireDefault(_SelectSearchable);

var _SelectNative = require('./SelectNative');

var _SelectNative2 = _interopRequireDefault(_SelectNative);

var _SelectOption = require('./SelectOption');

var _SelectOption2 = _interopRequireDefault(_SelectOption);

if (!process.env.ALEX_UI_IGNORE_CSS) { require('./Select.css'); }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_SelectNative2.default.displayName = 'Select';

_SelectSearchable2.default.displayName = 'Select.Searchable';
_SelectNative2.default.Searchable = _SelectSearchable2.default;

_SelectOption2.default.displayName = 'Select.Option';
_SelectNative2.default.Option = _SelectOption2.default;

exports.default = _SelectNative2.default;