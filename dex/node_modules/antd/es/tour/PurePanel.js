var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';
import panelRender from './panelRender';
import { RawPurePanel as PopoverRawPurePanel } from '../popover/PurePanel';
import useStyle from './style';
const PurePanel = props => {
  const {
      prefixCls: customizePrefixCls,
      current = 0,
      total = 6,
      className,
      style,
      type
    } = props,
    restProps = __rest(props, ["prefixCls", "current", "total", "className", "style", "type"]);
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('tour', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const node = panelRender(Object.assign(Object.assign({}, restProps), {
    prefixCls,
    total
  }), current, type);
  return wrapSSR( /*#__PURE__*/React.createElement(PopoverRawPurePanel, {
    prefixCls: prefixCls,
    hashId: hashId,
    className: classNames(className, `${prefixCls}-pure`, type && `${prefixCls}-${type}`),
    style: style
  }, node));
  // return node as React.ReactElement;
};

export default PurePanel;