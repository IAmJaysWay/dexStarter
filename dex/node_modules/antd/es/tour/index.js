var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import React, { useContext } from 'react';
import RCTour from '@rc-component/tour';
import classNames from 'classnames';
import panelRender from './panelRender';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import PurePanel from './PurePanel';
const Tour = props => {
  const {
      prefixCls: customizePrefixCls,
      steps,
      current,
      type,
      rootClassName
    } = props,
    restProps = __rest(props, ["prefixCls", "steps", "current", "type", "rootClassName"]);
  const {
    getPrefixCls,
    direction
  } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tour', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const customClassName = classNames({
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, hashId, rootClassName);
  const mergedRenderPanel = (stepProps, stepCurrent) => panelRender(stepProps, stepCurrent, type);
  return wrapSSR( /*#__PURE__*/React.createElement(RCTour, Object.assign({}, restProps, {
    rootClassName: customClassName,
    prefixCls: prefixCls,
    steps: steps,
    current: current,
    animated: true,
    renderPanel: mergedRenderPanel
  })));
};
if (process.env.NODE_ENV !== 'production') {
  Tour.displayName = 'Tour';
}
Tour._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
export default Tour;