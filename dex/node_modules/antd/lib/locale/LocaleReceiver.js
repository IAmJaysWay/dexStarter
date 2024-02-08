"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocaleReceiver = exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("./context"));
var _en_US = _interopRequireDefault(require("./en_US"));
const LocaleReceiver = props => {
  const {
    componentName = 'global',
    defaultLocale,
    children
  } = props;
  const antLocale = React.useContext(_context.default);
  const getLocale = React.useMemo(() => {
    var _a;
    const locale = defaultLocale || _en_US.default[componentName];
    const localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  const getLocaleCode = React.useMemo(() => {
    const localeCode = antLocale && antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (antLocale && antLocale.exist && !localeCode) {
      return _en_US.default.locale;
    }
    return localeCode;
  }, [antLocale]);
  return children(getLocale, getLocaleCode, antLocale);
};
var _default = LocaleReceiver;
exports.default = _default;
const useLocaleReceiver = (componentName, defaultLocale) => {
  const antLocale = React.useContext(_context.default);
  const getLocale = React.useMemo(() => {
    var _a;
    const locale = defaultLocale || _en_US.default[componentName];
    const localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [getLocale];
};
exports.useLocaleReceiver = useLocaleReceiver;