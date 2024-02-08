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
var _LocaleReceiver = _interopRequireDefault(require("../locale/LocaleReceiver"));
var _empty = _interopRequireDefault(require("./empty"));
var _simple = _interopRequireDefault(require("./simple"));
var _style = _interopRequireDefault(require("./style"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const defaultEmptyImg = /*#__PURE__*/React.createElement(_empty.default, null);
const simpleEmptyImg = /*#__PURE__*/React.createElement(_simple.default, null);
const Empty = _a => {
  var {
      className,
      prefixCls: customizePrefixCls,
      image = defaultEmptyImg,
      description,
      children,
      imageStyle
    } = _a,
    restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);
  const {
    getPrefixCls,
    direction
  } = React.useContext(_configProvider.ConfigContext);
  const prefixCls = getPrefixCls('empty', customizePrefixCls);
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  return wrapSSR( /*#__PURE__*/React.createElement(_LocaleReceiver.default, {
    componentName: "Empty"
  }, locale => {
    const des = typeof description !== 'undefined' ? description : locale.description;
    const alt = typeof des === 'string' ? des : 'empty';
    let imageNode = null;
    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/React.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }
    return /*#__PURE__*/React.createElement("div", Object.assign({
      className: (0, _classnames.default)(hashId, prefixCls, {
        [`${prefixCls}-normal`]: image === simpleEmptyImg,
        [`${prefixCls}-rtl`]: direction === 'rtl'
      }, className)
    }, restProps), /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-image`,
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-description`
    }, des), children && /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-footer`
    }, children));
  }));
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
if (process.env.NODE_ENV !== 'production') {
  Empty.displayName = 'Empty';
}
var _default = Empty;
exports.default = _default;