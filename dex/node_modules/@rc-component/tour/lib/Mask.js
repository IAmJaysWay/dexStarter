"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _portal = _interopRequireDefault(require("@rc-component/portal"));

var _useId = _interopRequireDefault(require("rc-util/lib/hooks/useId"));

var COVER_PROPS = {
  fill: 'transparent',
  pointerEvents: 'auto'
};

var Mask = function Mask(props) {
  var prefixCls = props.prefixCls,
      rootClassName = props.rootClassName,
      pos = props.pos,
      mask = props.mask,
      open = props.open,
      animated = props.animated;
  var id = (0, _useId.default)();
  var maskId = "".concat(prefixCls, "-mask-").concat(id);
  var mergedAnimated = (0, _typeof2.default)(animated) === 'object' ? animated === null || animated === void 0 ? void 0 : animated.placeholder : animated;
  return /*#__PURE__*/_react.default.createElement(_portal.default, {
    open: open,
    autoLock: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("".concat(prefixCls, "-mask"), rootClassName),
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 900,
      pointerEvents: 'none'
    }
  }, mask ? /*#__PURE__*/_react.default.createElement("svg", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("mask", {
    id: maskId
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "white"
  }), pos && /*#__PURE__*/_react.default.createElement("rect", {
    x: pos.left,
    y: pos.top,
    rx: pos.radius,
    width: pos.width,
    height: pos.height,
    fill: "black",
    className: mergedAnimated ? "".concat(prefixCls, "-placeholder-animated") : ''
  }))), /*#__PURE__*/_react.default.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "rgba(0,0,0,0.5)",
    mask: "url(#".concat(maskId, ")")
  }), pos && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("rect", (0, _extends2.default)({}, COVER_PROPS, {
    x: "0",
    y: "0",
    width: "100%",
    height: pos.top
  })), /*#__PURE__*/_react.default.createElement("rect", (0, _extends2.default)({}, COVER_PROPS, {
    x: "0",
    y: "0",
    width: pos.left,
    height: "100%"
  })), /*#__PURE__*/_react.default.createElement("rect", (0, _extends2.default)({}, COVER_PROPS, {
    x: "0",
    y: pos.top + pos.height,
    width: "100%",
    height: "calc(100vh - ".concat(pos.top + pos.height, "px)")
  })), /*#__PURE__*/_react.default.createElement("rect", (0, _extends2.default)({}, COVER_PROPS, {
    x: pos.left + pos.width,
    y: "0",
    width: "calc(100vw - ".concat(pos.left + pos.width, "px)"),
    height: "100%"
  })))) : null));
};

var _default = Mask;
exports.default = _default;