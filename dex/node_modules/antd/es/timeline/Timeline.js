var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import LoadingOutlined from "@ant-design/icons/es/icons/LoadingOutlined";
import classNames from 'classnames';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import { cloneElement } from '../_util/reactNode';
import TimelineItem from './TimelineItem';
// CSSINJS
import useStyle from './style';
const Timeline = props => {
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  const {
      prefixCls: customizePrefixCls,
      pending = null,
      pendingDot,
      children,
      className,
      reverse = false,
      mode = ''
    } = props,
    restProps = __rest(props, ["prefixCls", "pending", "pendingDot", "children", "className", "reverse", "mode"]);
  const prefixCls = getPrefixCls('timeline', customizePrefixCls);
  const pendingNode = typeof pending === 'boolean' ? null : pending;
  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const pendingItem = pending ? /*#__PURE__*/React.createElement(TimelineItem, {
    pending: !!pending,
    dot: pendingDot || /*#__PURE__*/React.createElement(LoadingOutlined, null)
  }, pendingNode) : null;
  const timeLineItems = React.Children.toArray(children);
  timeLineItems.push(pendingItem);
  if (reverse) {
    timeLineItems.reverse();
  }
  const getPositionCls = (ele, idx) => {
    if (mode === 'alternate') {
      if (ele.props.position === 'right') return `${prefixCls}-item-right`;
      if (ele.props.position === 'left') return `${prefixCls}-item-left`;
      return idx % 2 === 0 ? `${prefixCls}-item-left` : `${prefixCls}-item-right`;
    }
    if (mode === 'left') return `${prefixCls}-item-left`;
    if (mode === 'right') return `${prefixCls}-item-right`;
    if (ele.props.position === 'right') return `${prefixCls}-item-right`;
    return '';
  };
  // Remove falsy items
  const truthyItems = timeLineItems.filter(item => !!item);
  const itemsCount = React.Children.count(truthyItems);
  const lastCls = `${prefixCls}-item-last`;
  const items = React.Children.map(truthyItems, (ele, idx) => {
    const pendingClass = idx === itemsCount - 2 ? lastCls : '';
    const readyClass = idx === itemsCount - 1 ? lastCls : '';
    return cloneElement(ele, {
      className: classNames([ele.props.className, !reverse && !!pending ? pendingClass : readyClass, getPositionCls(ele, idx)])
    });
  });
  const hasLabelItem = timeLineItems.some(item => {
    var _a;
    return !!((_a = item === null || item === void 0 ? void 0 : item.props) === null || _a === void 0 ? void 0 : _a.label);
  });
  const classString = classNames(prefixCls, {
    [`${prefixCls}-pending`]: !!pending,
    [`${prefixCls}-reverse`]: !!reverse,
    [`${prefixCls}-${mode}`]: !!mode && !hasLabelItem,
    [`${prefixCls}-label`]: hasLabelItem,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className);
  return wrapSSR( /*#__PURE__*/React.createElement("ul", Object.assign({}, restProps, {
    className: classNames(classString, hashId)
  }), items));
};
Timeline.Item = TimelineItem;
if (process.env.NODE_ENV !== 'production') {
  Timeline.displayName = 'Timeline';
}
export default Timeline;