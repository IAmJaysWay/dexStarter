import * as React from 'react';
import { ConfigContext } from '../config-provider';
const BreadcrumbSeparator = _ref => {
  let {
    children
  } = _ref;
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('breadcrumb');
  return /*#__PURE__*/React.createElement("span", {
    className: `${prefixCls}-separator`
  }, children || '/');
};
BreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;
export default BreadcrumbSeparator;