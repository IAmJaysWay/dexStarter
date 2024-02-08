"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-underscore-dangle */

/* eslint-disable react/prop-types */
var PanelContent = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classnames;

  var prefixCls = props.prefixCls,
      forceRender = props.forceRender,
      className = props.className,
      style = props.style,
      children = props.children,
      isActive = props.isActive,
      role = props.role;

  var _React$useState = React.useState(isActive || forceRender),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      rendered = _React$useState2[0],
      setRendered = _React$useState2[1];

  React.useEffect(function () {
    if (forceRender || isActive) {
      setRendered(true);
    }
  }, [forceRender, isActive]);

  if (!rendered) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: (0, _classnames2.default)("".concat(prefixCls, "-content"), (_classnames = {}, (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-content-active"), isActive), (0, _defineProperty2.default)(_classnames, "".concat(prefixCls, "-content-inactive"), !isActive), _classnames), className),
    style: style,
    role: role
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-content-box")
  }, children));
});
PanelContent.displayName = 'PanelContent';
var _default = PanelContent;
exports.default = _default;