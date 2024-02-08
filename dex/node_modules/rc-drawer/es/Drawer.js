import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import Portal from '@rc-component/portal';
import DrawerPopup from './DrawerPopup';
import { warnCheck } from './util';
var Drawer = function Drawer(props) {
  var _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-drawer' : _props$prefixCls,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
    _props$keyboard = props.keyboard,
    keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
    _props$width = props.width,
    width = _props$width === void 0 ? 378 : _props$width,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    getContainer = props.getContainer,
    forceRender = props.forceRender,
    afterOpenChange = props.afterOpenChange,
    destroyOnClose = props.destroyOnClose;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];
  // ============================= Warn =============================
  if (process.env.NODE_ENV !== 'production') {
    warnCheck(props);
  }
  // ============================= Open =============================
  var internalAfterOpenChange = function internalAfterOpenChange(nextVisible) {
    setAnimatedVisible(nextVisible);
    afterOpenChange === null || afterOpenChange === void 0 ? void 0 : afterOpenChange(nextVisible);
  };
  // ============================ Render ============================
  if (!forceRender && !animatedVisible && !open && destroyOnClose) {
    return null;
  }
  var drawerPopupProps = _objectSpread(_objectSpread({}, props), {}, {
    open: open,
    prefixCls: prefixCls,
    placement: placement,
    autoFocus: autoFocus,
    keyboard: keyboard,
    width: width,
    mask: mask,
    maskClosable: maskClosable,
    inline: getContainer === false,
    afterOpenChange: internalAfterOpenChange
  });
  return /*#__PURE__*/React.createElement(Portal, {
    open: open || forceRender || animatedVisible,
    autoDestroy: false,
    getContainer: getContainer,
    autoLock: mask && (open || animatedVisible)
  }, /*#__PURE__*/React.createElement(DrawerPopup, drawerPopupProps));
};
if (process.env.NODE_ENV !== 'production') {
  Drawer.displayName = 'Drawer';
}
export default Drawer;