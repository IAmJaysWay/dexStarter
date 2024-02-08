var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
import { Panel } from 'rc-dialog';
import * as React from 'react';
import Button from '../button';
import { convertLegacyProps } from '../button/button';
import { ConfigContext } from '../config-provider';
import LocaleReceiver from '../locale/LocaleReceiver';
import { ConfirmContent } from './ConfirmDialog';
import { getConfirmLocale } from './locale';
import useStyle from './style';
export function renderCloseIcon(prefixCls, closeIcon) {
  return /*#__PURE__*/React.createElement("span", {
    className: `${prefixCls}-close-x`
  }, closeIcon || /*#__PURE__*/React.createElement(CloseOutlined, {
    className: `${prefixCls}-close-icon`
  }));
}
export function renderFooter(props) {
  const {
    okText,
    okType = 'primary',
    cancelText,
    confirmLoading,
    onOk,
    onCancel,
    okButtonProps,
    cancelButtonProps,
    footer
  } = props;
  return footer === undefined ? /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Modal",
    defaultLocale: getConfirmLocale()
  }, locale => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, Object.assign({
    onClick: onCancel
  }, cancelButtonProps), cancelText || locale.cancelText), /*#__PURE__*/React.createElement(Button, Object.assign({}, convertLegacyProps(okType), {
    loading: confirmLoading,
    onClick: onOk
  }, okButtonProps), okText || locale.okText))) : footer;
}
export default function PurePanel(props) {
  const {
      prefixCls: customizePrefixCls,
      className,
      closeIcon,
      closable,
      type,
      title,
      children
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children"]);
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const prefixCls = customizePrefixCls || getPrefixCls('modal');
  const [, hashId] = useStyle(prefixCls);
  const confirmPrefixCls = `${prefixCls}-confirm`;
  // Choose target props by confirm mark
  let additionalProps = {};
  if (type) {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : false,
      title: '',
      footer: '',
      children: /*#__PURE__*/React.createElement(ConfirmContent, Object.assign({}, props, {
        confirmPrefixCls: confirmPrefixCls,
        rootPrefixCls: rootPrefixCls,
        content: children
      }))
    };
  } else {
    additionalProps = {
      closable: closable !== null && closable !== void 0 ? closable : true,
      title,
      footer: renderFooter(props),
      children
    };
  }
  return /*#__PURE__*/React.createElement(Panel, Object.assign({
    prefixCls: prefixCls,
    className: classNames(hashId, `${prefixCls}-pure-panel`, type && confirmPrefixCls, type && `${confirmPrefixCls}-${type}`, className)
  }, restProps, {
    closeIcon: renderCloseIcon(prefixCls, closeIcon),
    closable: closable
  }, additionalProps));
}