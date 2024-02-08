var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import Tooltip from '../tooltip';
import Content from './FloatButtonContent';
import FloatButtonGroupContext from './context';
import warning from '../_util/warning';
export const floatButtonPrefixCls = 'float-btn';
const FloatButton = (props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      type = 'default',
      shape = 'circle',
      icon,
      description,
      tooltip
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "type", "shape", "icon", "description", "tooltip"]);
  const {
    getPrefixCls,
    direction
  } = useContext(ConfigContext);
  const groupShape = useContext(FloatButtonGroupContext);
  const prefixCls = getPrefixCls(floatButtonPrefixCls, customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const mergeShape = groupShape || shape;
  const classString = classNames(hashId, prefixCls, className, `${prefixCls}-${type}`, `${prefixCls}-${mergeShape}`, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const contentProps = useMemo(() => ({
    prefixCls,
    description,
    icon,
    type
  }), [prefixCls, description, icon, type]);
  const buttonNode = /*#__PURE__*/React.createElement(Tooltip, {
    title: tooltip,
    placement: "left"
  }, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-body`
  }, /*#__PURE__*/React.createElement(Content, Object.assign({}, contentProps))));
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(!(shape === 'circle' && description), 'FloatButton', 'supported only when `shape` is `square`. Due to narrow space for text, short sentence is recommended.') : void 0;
  }
  return wrapSSR(props.href ? /*#__PURE__*/React.createElement("a", Object.assign({
    ref: ref
  }, restProps, {
    className: classString
  }), buttonNode) : /*#__PURE__*/React.createElement("button", Object.assign({
    ref: ref
  }, restProps, {
    className: classString,
    type: "button"
  }), buttonNode));
};
if (process.env.NODE_ENV !== 'production') {
  FloatButton.displayName = 'FloatButton';
}
const ForwardFloatButton = /*#__PURE__*/React.forwardRef(FloatButton);
export default ForwardFloatButton;