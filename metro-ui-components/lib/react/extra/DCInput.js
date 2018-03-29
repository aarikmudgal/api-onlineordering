'use strict';

exports.__esModule = true;
exports.DCInput = undefined;

var _DCInputBase = require('./DCInputBase');

var _DCInputEmail = require('./DCInputEmail');

var _DCInputPassword = require('./DCInputPassword');

var _DCInputText = require('./DCInputText');

var _DCInputMasked = require('./DCInputMasked');

var _DCSegmentedControl = require('./DCSegmentedControl');

var _DCToggleButton = require('./DCToggleButton');

_DCInputBase.DCInputBase.Email = _DCInputEmail.DCInputEmail;
_DCInputBase.DCInputBase.Password = _DCInputPassword.DCInputPassword;
_DCInputBase.DCInputBase.Text = _DCInputText.DCInputText;
_DCInputBase.DCInputBase.Masked = _DCInputMasked.DCInputMasked;
_DCInputBase.DCInputBase.SegmentedControl = _DCSegmentedControl.DCSegmentedControl;
_DCInputBase.DCInputBase.ToggleButton = _DCToggleButton.DCToggleButton;

var DCInput = exports.DCInput = _DCInputBase.DCInputBase;