import classNames from 'classnames';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import AnchorContext from './context';
const AnchorLink = props => {
  const {
    href = '#',
    title,
    prefixCls: customizePrefixCls,
    children,
    className,
    target
  } = props;
  const context = React.useContext(AnchorContext);
  const {
    registerLink,
    unregisterLink,
    scrollTo,
    onClick,
    activeLink
  } = context || {};
  React.useEffect(() => {
    registerLink === null || registerLink === void 0 ? void 0 : registerLink(href);
    return () => {
      unregisterLink === null || unregisterLink === void 0 ? void 0 : unregisterLink(href);
    };
  }, [href, registerLink, unregisterLink]);
  const handleClick = e => {
    onClick === null || onClick === void 0 ? void 0 : onClick(e, {
      title,
      href
    });
    scrollTo === null || scrollTo === void 0 ? void 0 : scrollTo(href);
  };
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('anchor', customizePrefixCls);
  const wrapperClassName = classNames(`${prefixCls}-link`, className, {
    [`${prefixCls}-link-active`]: activeLink === href
  });
  const titleClassName = classNames(`${prefixCls}-link-title`, {
    [`${prefixCls}-link-title-active`]: activeLink === href
  });
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClassName
  }, /*#__PURE__*/React.createElement("a", {
    className: titleClassName,
    href: href,
    title: typeof title === 'string' ? title : '',
    target: target,
    onClick: handleClick
  }, title), children);
};
export default AnchorLink;