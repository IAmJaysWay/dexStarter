"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function () {
    return _context.ConfigConsumer;
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function () {
    return _context.ConfigContext;
  }
});
exports.default = exports.configConsumerProps = void 0;
Object.defineProperty(exports, "defaultIconPrefixCls", {
  enumerable: true,
  get: function () {
    return _context.defaultIconPrefixCls;
  }
});
exports.globalConfig = exports.defaultPrefixCls = void 0;
var _cssinjs = require("@ant-design/cssinjs");
var _Context = _interopRequireDefault(require("@ant-design/icons/lib/components/Context"));
var _rcFieldForm = require("rc-field-form");
var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));
var React = _interopRequireWildcard(require("react"));
var _locale = _interopRequireWildcard(require("../locale"));
var _LocaleReceiver = _interopRequireDefault(require("../locale/LocaleReceiver"));
var _en_US = _interopRequireDefault(require("../locale/en_US"));
var _internal = require("../theme/internal");
var _seed = _interopRequireDefault(require("../theme/themes/seed"));
var _context = require("./context");
var _cssVariables = require("./cssVariables");
var _DisabledContext = require("./DisabledContext");
var _useTheme = _interopRequireDefault(require("./hooks/useTheme"));
var _SizeContext = _interopRequireWildcard(require("./SizeContext"));
var _style = _interopRequireDefault(require("./style"));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
// These props is used by `useContext` directly in sub component
exports.configConsumerProps = configConsumerProps;
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form', 'select'];
const defaultPrefixCls = 'ant';
exports.defaultPrefixCls = defaultPrefixCls;
let globalPrefixCls;
let globalIconPrefixCls;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || _context.defaultIconPrefixCls;
}
const setGlobalConfig = _ref => {
  let {
    prefixCls,
    iconPrefixCls,
    theme
  } = _ref;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if (theme) {
    (0, _cssVariables.registerTheme)(getGlobalPrefixCls(), theme);
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  }
});
exports.globalConfig = globalConfig;
const ProviderChildren = props => {
  var _a, _b;
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    form,
    locale,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled
  } = props;
  const getPrefixCls = React.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) return customizePrefixCls;
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || _context.defaultIconPrefixCls;
  const shouldWrapSSR = iconPrefixCls !== parentContext.iconPrefixCls;
  const csp = customCsp || parentContext.csp;
  const wrapSSR = (0, _style.default)(iconPrefixCls);
  const mergedTheme = (0, _useTheme.default)(theme, parentContext.theme);
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = (0, _useMemo.default)(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = React.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = shouldWrapSSR ? wrapSSR(children) : children;
  // Additional Form provider
  let validateMessages = {};
  if (locale) {
    validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = _en_US.default.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
  }
  if (form && form.validateMessages) {
    validateMessages = Object.assign(Object.assign({}, validateMessages), form.validateMessages);
  }
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, {
      validateMessages: validateMessages
    }, children);
  }
  if (locale) {
    childNode = /*#__PURE__*/React.createElement(_locale.default, {
      locale: locale,
      _ANT_MARK__: _locale.ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/React.createElement(_Context.default.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  // ================================ Dynamic theme ================================
  const memoTheme = React.useMemo(() => {
    const _a = mergedTheme || {},
      {
        algorithm,
        token
      } = _a,
      rest = __rest(_a, ["algorithm", "token"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0, _cssinjs.createTheme)(algorithm) : undefined;
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: Object.assign(Object.assign({}, _seed.default), token)
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/React.createElement(_internal.DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/React.createElement(_DisabledContext.DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/React.createElement(_context.ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => /*#__PURE__*/React.createElement(_LocaleReceiver.default, null, (_, __, legacyLocale) => /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, context => /*#__PURE__*/React.createElement(ProviderChildren, Object.assign({
  parentContext: context,
  legacyLocale: legacyLocale
}, props))));
ConfigProvider.ConfigContext = _context.ConfigContext;
ConfigProvider.SizeContext = _SizeContext.default;
ConfigProvider.config = setGlobalConfig;
if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = 'ConfigProvider';
}
var _default = ConfigProvider;
exports.default = _default;