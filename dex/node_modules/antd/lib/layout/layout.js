"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutContext = exports.Header = exports.Footer = exports.Content = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const LayoutContext = /*#__PURE__*/React.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
exports.LayoutContext = LayoutContext;
function generator(_ref) {
  let {
    suffixCls,
    tagName,
    displayName
  } = _ref;
  return BasicComponent => {
    const Adapter = /*#__PURE__*/React.forwardRef((props, ref) => {
      const {
        getPrefixCls
      } = React.useContext(_configProvider.ConfigContext);
      const {
        prefixCls: customizePrefixCls
      } = props;
      const prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
      return /*#__PURE__*/React.createElement(BasicComponent, Object.assign({
        ref: ref,
        prefixCls: prefixCls,
        tagName: tagName
      }, props));
    });
    if (process.env.NODE_ENV !== 'production') {
      Adapter.displayName = displayName;
    }
    return Adapter;
  };
}
const Basic = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
      prefixCls,
      className,
      children,
      tagName
    } = props,
    others = __rest(props, ["prefixCls", "className", "children", "tagName"]);
  const classString = (0, _classnames.default)(prefixCls, className);
  return /*#__PURE__*/React.createElement(tagName, Object.assign(Object.assign({
    className: classString
  }, others), {
    ref
  }), children);
});
const BasicLayout = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    direction
  } = React.useContext(_configProvider.ConfigContext);
  const [siders, setSiders] = React.useState([]);
  const {
      prefixCls,
      className,
      children,
      hasSider,
      tagName: Tag
    } = props,
    others = __rest(props, ["prefixCls", "className", "children", "hasSider", "tagName"]);
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  const classString = (0, _classnames.default)(prefixCls, {
    [`${prefixCls}-has-sider`]: typeof hasSider === 'boolean' ? hasSider : siders.length > 0,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  const contextValue = React.useMemo(() => ({
    siderHook: {
      addSider: id => {
        setSiders(prev => [].concat((0, _toConsumableArray2.default)(prev), [id]));
      },
      removeSider: id => {
        setSiders(prev => prev.filter(currentId => currentId !== id));
      }
    }
  }), []);
  return wrapSSR( /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(Tag, Object.assign({
    ref: ref,
    className: classString
  }, others), children)));
});
const Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
const Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
exports.Header = Header;
const Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
exports.Footer = Footer;
const Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);
exports.Content = Content;
var _default = Layout;
exports.default = _default;