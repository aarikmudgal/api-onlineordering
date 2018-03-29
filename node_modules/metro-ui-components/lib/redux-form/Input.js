'use strict';

exports.__esModule = true;

var _reduxFormFieldFactory = require('./util/reduxFormFieldFactory');

var _reduxFormFieldFactory2 = _interopRequireDefault(_reduxFormFieldFactory);

var _reduxFormFieldMappings = require('./util/reduxFormFieldMappings');

var _Input = require('../react/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReduxInput = (0, _reduxFormFieldFactory2.default)(_Input2.default, _reduxFormFieldMappings.mapInputBaseProps);

ReduxInput.Date = (0, _reduxFormFieldFactory2.default)(_Input2.default.Date, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.Email = (0, _reduxFormFieldFactory2.default)(_Input2.default.Email, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.Password = (0, _reduxFormFieldFactory2.default)(_Input2.default.Password, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.Search = (0, _reduxFormFieldFactory2.default)(_Input2.default.Search, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.Tel = (0, _reduxFormFieldFactory2.default)(_Input2.default.Tel, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.Text = (0, _reduxFormFieldFactory2.default)(_Input2.default.Text, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.Masked = (0, _reduxFormFieldFactory2.default)(_Input2.default.Masked, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.ShortCode = (0, _reduxFormFieldFactory2.default)(_Input2.default.ShortCode, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.TextArea = (0, _reduxFormFieldFactory2.default)(_Input2.default.TextArea, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.URL = (0, _reduxFormFieldFactory2.default)(_Input2.default.URL, _reduxFormFieldMappings.mapInputBaseProps);
ReduxInput.ToggleButton = (0, _reduxFormFieldFactory2.default)(_Input2.default.ToggleButton, _reduxFormFieldMappings.mapToggleButtonProps);
ReduxInput.ButtonBar = (0, _reduxFormFieldFactory2.default)(_Input2.default.ButtonBar, _reduxFormFieldMappings.mapButtonBarProps);
ReduxInput.SegmentedControl = (0, _reduxFormFieldFactory2.default)(_Input2.default.SegmentedControl, _reduxFormFieldMappings.mapButtonBarProps);

exports.default = ReduxInput;