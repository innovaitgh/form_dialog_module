"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  var open = props.open,
      onClose = props.onClose,
      addItem = props.addItem,
      updateItem = props.updateItem,
      response = props.response,
      onSubmit = props.onSubmit,
      title = props.title,
      DialogProps = props.DialogProps,
      children = props.children,
      isEditing = props.isEditing;

  _react["default"].useEffect(function () {
    if (!response) return;
    var status = response.status;
    if (status === 201) addItem(JSON.parse(response.response));else if (status === 200) updateItem(JSON.parse(response.response));
  }, [response]);

  return /*#__PURE__*/_react["default"].createElement(_core.Dialog, _extends({}, DialogProps, {
    onClose: onClose,
    open: open
  }), /*#__PURE__*/_react["default"].createElement(_core.DialogTitle, null, title), /*#__PURE__*/_react["default"].createElement(_core.DialogContent, null, children), /*#__PURE__*/_react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: onSubmit
  }, isEditing ? "Update" : "Create")));
};

exports["default"] = _default;