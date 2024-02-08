"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Mark;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _util = require("../util");

var _context = _interopRequireDefault(require("../context"));

function Mark(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      children = props.children,
      value = props.value,
      _onClick = props.onClick;

  var _React$useContext = React.useContext(_context.default),
      min = _React$useContext.min,
      max = _React$useContext.max,
      direction = _React$useContext.direction,
      includedStart = _React$useContext.includedStart,
      includedEnd = _React$useContext.includedEnd,
      included = _React$useContext.included;

  var textCls = "".concat(prefixCls, "-text"); // ============================ Offset ============================

  var positionStyle = (0, _util.getDirectionStyle)(direction, value, min, max);
  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames.default)(textCls, (0, _defineProperty2.default)({}, "".concat(textCls, "-active"), included && includedStart <= value && value <= includedEnd)),
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, positionStyle), style),
    onMouseDown: function onMouseDown(e) {
      e.stopPropagation();
    },
    onClick: function onClick() {
      _onClick(value);
    }
  }, children);
}