"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dot;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _util = require("../util");

var _context = _interopRequireDefault(require("../context"));

function Dot(props) {
  var prefixCls = props.prefixCls,
      value = props.value,
      style = props.style,
      activeStyle = props.activeStyle;

  var _React$useContext = React.useContext(_context.default),
      min = _React$useContext.min,
      max = _React$useContext.max,
      direction = _React$useContext.direction,
      included = _React$useContext.included,
      includedStart = _React$useContext.includedStart,
      includedEnd = _React$useContext.includedEnd;

  var dotClassName = "".concat(prefixCls, "-dot");
  var active = included && includedStart <= value && value <= includedEnd; // ============================ Offset ============================

  var mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _util.getDirectionStyle)(direction, value, min, max)), typeof style === 'function' ? style(value) : style);

  if (active) {
    mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedStyle), typeof activeStyle === 'function' ? activeStyle(value) : activeStyle);
  }

  return /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames.default)(dotClassName, (0, _defineProperty2.default)({}, "".concat(dotClassName, "-active"), active)),
    style: mergedStyle
  });
}