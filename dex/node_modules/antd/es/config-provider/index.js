var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import { createTheme } from '@ant-design/cssinjs';
import IconContext from "@ant-design/icons/es/components/Context";
import { FormProvider as RcFormProvider } from 'rc-field-form';
import useMemo from "rc-util/es/hooks/useMemo";
import * as React from 'react';
import LocaleProvider, { ANT_MARK } from '../locale';
import LocaleReceiver from '../locale/LocaleReceiver';
import defaultLocale from '../locale/en_US';
import { DesignTokenContext } from '../theme/internal';
import defaultSeedToken from '../theme/themes/seed';
import { ConfigConsumer, ConfigContext, defaultIconPrefixCls } from './context';
import { registerTheme } from './cssVariables';
import { DisabledContextProvider } from './DisabledContext';
import useTheme from './hooks/useTheme';
import SizeContext, { SizeContextProvider } from './SizeContext';
import useStyle from './style';
export { ConfigContext, ConfigConsumer };
export { defaultIconPrefixCls };
export const configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form', 'select'];
export const defaultPrefixCls = 'ant';
let globalPrefixCls;
let globalIconPrefixCls;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
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
    registerTheme(getGlobalPrefixCls(), theme);
  }
};
export const globalConfig = () => ({
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
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
  const shouldWrapSSR = iconPrefixCls !== parentContext.iconPrefixCls;
  const csp = customCsp || parentContext.csp;
  const wrapSSR = useStyle(iconPrefixCls);
  const mergedTheme = useTheme(theme, parentContext.theme);
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
  const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
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
    validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = defaultLocale.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
  }
  if (form && form.validateMessages) {
    validateMessages = Object.assign(Object.assign({}, validateMessages), form.validateMessages);
  }
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/React.createElement(RcFormProvider, {
      validateMessages: validateMessages
    }, children);
  }
  if (locale) {
    childNode = /*#__PURE__*/React.createElement(LocaleProvider, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/React.createElement(IconContext.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/React.createElement(SizeContextProvider, {
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
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : undefined;
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: Object.assign(Object.assign({}, defaultSeedToken), token)
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/React.createElement(DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/React.createElement(DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/React.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => /*#__PURE__*/React.createElement(LocaleReceiver, null, (_, __, legacyLocale) => /*#__PURE__*/React.createElement(ConfigConsumer, null, context => /*#__PURE__*/React.createElement(ProviderChildren, Object.assign({
  parentContext: context,
  legacyLocale: legacyLocale
}, props))));
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = setGlobalConfig;
if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = 'ConfigProvider';
}
export default ConfigProvider;