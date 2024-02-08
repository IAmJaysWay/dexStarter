import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import React from 'react';
import classNames from 'classnames';
import Portal from '@rc-component/portal';
import useId from "rc-util/es/hooks/useId";
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
  var id = useId();
  var maskId = "".concat(prefixCls, "-mask-").concat(id);
  var mergedAnimated = _typeof(animated) === 'object' ? animated === null || animated === void 0 ? void 0 : animated.placeholder : animated;
  return /*#__PURE__*/React.createElement(Portal, {
    open: open,
    autoLock: true
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames("".concat(prefixCls, "-mask"), rootClassName),
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 900,
      pointerEvents: 'none'
    }
  }, mask ? /*#__PURE__*/React.createElement("svg", {
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("mask", {
    id: maskId
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "white"
  }), pos && /*#__PURE__*/React.createElement("rect", {
    x: pos.left,
    y: pos.top,
    rx: pos.radius,
    width: pos.width,
    height: pos.height,
    fill: "black",
    className: mergedAnimated ? "".concat(prefixCls, "-placeholder-animated") : ''
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "rgba(0,0,0,0.5)",
    mask: "url(#".concat(maskId, ")")
  }), pos && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", _extends({}, COVER_PROPS, {
    x: "0",
    y: "0",
    width: "100%",
    height: pos.top
  })), /*#__PURE__*/React.createElement("rect", _extends({}, COVER_PROPS, {
    x: "0",
    y: "0",
    width: pos.left,
    height: "100%"
  })), /*#__PURE__*/React.createElement("rect", _extends({}, COVER_PROPS, {
    x: "0",
    y: pos.top + pos.height,
    width: "100%",
    height: "calc(100vh - ".concat(pos.top + pos.height, "px)")
  })), /*#__PURE__*/React.createElement("rect", _extends({}, COVER_PROPS, {
    x: pos.left + pos.width,
    y: "0",
    width: "calc(100vw - ".concat(pos.left + pos.width, "px)"),
    height: "100%"
  })))) : null));
};

export default Mask;