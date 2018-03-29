'use strict';

exports.__esModule = true;

var _reduxFormFieldFactory = require('../util/reduxFormFieldFactory');

var _reduxFormFieldFactory2 = _interopRequireDefault(_reduxFormFieldFactory);

var _reduxFormFieldMappings = require('../util/reduxFormFieldMappings');

var _DCInput = require('../../react/extra/DCInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReduxDCInput = (0, _reduxFormFieldFactory2.default)(_DCInput.DCInput, _reduxFormFieldMappings.mapInputBaseProps);

ReduxDCInput.Email = (0, _reduxFormFieldFactory2.default)(_DCInput.DCInput.Email, _reduxFormFieldMappings.mapInputBaseProps);
ReduxDCInput.Password = (0, _reduxFormFieldFactory2.default)(_DCInput.DCInput.Password, _reduxFormFieldMappings.mapInputBaseProps);
ReduxDCInput.Text = (0, _reduxFormFieldFactory2.default)(_DCInput.DCInput.Text, _reduxFormFieldMappings.mapInputBaseProps);
ReduxDCInput.Masked = (0, _reduxFormFieldFactory2.default)(_DCInput.DCInput.Masked, _reduxFormFieldMappings.mapInputBaseProps);
ReduxDCInput.SegmentedControl = (0, _reduxFormFieldFactory2.default)(_DCInput.DCInput.SegmentedControl, _reduxFormFieldMappings.mapButtonBarProps);
ReduxDCInput.ToggleButton = (0, _reduxFormFieldFactory2.default)(_DCInput.DCInput.ToggleButton, _reduxFormFieldMappings.mapToggleButtonProps);

exports.default = ReduxDCInput;