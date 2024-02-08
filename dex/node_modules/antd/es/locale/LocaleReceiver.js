import * as React from 'react';
import LocaleContext from './context';
import defaultLocaleData from './en_US';
const LocaleReceiver = props => {
  const {
    componentName = 'global',
    defaultLocale,
    children
  } = props;
  const antLocale = React.useContext(LocaleContext);
  const getLocale = React.useMemo(() => {
    var _a;
    const locale = defaultLocale || defaultLocaleData[componentName];
    const localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  const getLocaleCode = React.useMemo(() => {
    const localeCode = antLocale && antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (antLocale && antLocale.exist && !localeCode) {
      return defaultLocaleData.locale;
    }
    return localeCode;
  }, [antLocale]);
  return children(getLocale, getLocaleCode, antLocale);
};
export default LocaleReceiver;
export const useLocaleReceiver = (componentName, defaultLocale) => {
  const antLocale = React.useContext(LocaleContext);
  const getLocale = React.useMemo(() => {
    var _a;
    const locale = defaultLocale || defaultLocaleData[componentName];
    const localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [getLocale];
};