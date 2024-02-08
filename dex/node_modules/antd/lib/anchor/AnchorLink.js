"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _context = _interopRequireDefault(require("./context"));
const AnchorLink = props => {
  const {
    href = '#',
    title,
    prefixCls: customizePrefixCls,
    children,
    className,
    target
  } = props;
  const context = React.useContext(_context.default);
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
  } = React.useContext(_configProvider.ConfigContext);
  const prefixCls = getPrefixCls('anchor', customizePrefixCls);
  const wrapperClassName = (0, _classnames.default)(`${prefixCls}-link`, className, {
    [`${prefixCls}-link-active`]: activeLink === href
  });
  const titleClassName = (0, _classnames.default)(`${prefixCls}-link-title`, {
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
var _default = AnchorLink;
exports.default = _default;