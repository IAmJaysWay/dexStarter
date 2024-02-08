var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import CheckCircleFilled from "@ant-design/icons/es/icons/CheckCircleFilled";
import CheckOutlined from "@ant-design/icons/es/icons/CheckOutlined";
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import classNames from 'classnames';
import omit from "rc-util/es/omit";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import warning from '../_util/warning';
import Circle from './Circle';
import Line from './Line';
import Steps from './Steps';
import { getSuccessPercent, validProgress } from './utils';
import useStyle from './style';
const ProgressTypes = ['line', 'circle', 'dashboard'];
const ProgressStatuses = ['normal', 'exception', 'active', 'success'];
const Progress = props => {
  const {
      prefixCls: customizePrefixCls,
      className,
      steps,
      strokeColor,
      percent = 0,
      size = 'default',
      showInfo = true,
      type = 'line',
      status,
      format
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "steps", "strokeColor", "percent", "size", "showInfo", "type", "status", "format"]);
  const percentNumber = React.useMemo(() => {
    const successPercent = getSuccessPercent(props);
    return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
  }, [percent, props.success, props.successPercent]);
  const progressStatus = React.useMemo(() => {
    if (!ProgressStatuses.includes(status) && percentNumber >= 100) {
      return 'success';
    }
    return status || 'normal';
  }, [status, percentNumber]);
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('progress', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const progressInfo = React.useMemo(() => {
    if (!showInfo) {
      return null;
    }
    const successPercent = getSuccessPercent(props);
    let text;
    const textFormatter = format || (number => `${number}%`);
    const isLineType = type === 'line';
    if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
      text = textFormatter(validProgress(percent), validProgress(successPercent));
    } else if (progressStatus === 'exception') {
      text = isLineType ? /*#__PURE__*/React.createElement(CloseCircleFilled, null) : /*#__PURE__*/React.createElement(CloseOutlined, null);
    } else if (progressStatus === 'success') {
      text = isLineType ? /*#__PURE__*/React.createElement(CheckCircleFilled, null) : /*#__PURE__*/React.createElement(CheckOutlined, null);
    }
    return /*#__PURE__*/React.createElement("span", {
      className: `${prefixCls}-text`,
      title: typeof text === 'string' ? text : undefined
    }, text);
  }, [showInfo, percentNumber, progressStatus, type, prefixCls, format]);
  process.env.NODE_ENV !== "production" ? warning(!('successPercent' in props), 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.') : void 0;
  const strokeColorNotArray = Array.isArray(strokeColor) ? strokeColor[0] : strokeColor;
  const strokeColorNotGradient = typeof strokeColor === 'string' || Array.isArray(strokeColor) ? strokeColor : undefined;
  let progress;
  // Render progress shape
  if (type === 'line') {
    progress = steps ? /*#__PURE__*/React.createElement(Steps, Object.assign({}, props, {
      strokeColor: strokeColorNotGradient,
      prefixCls: prefixCls,
      steps: steps
    }), progressInfo) : /*#__PURE__*/React.createElement(Line, Object.assign({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      direction: direction
    }), progressInfo);
  } else if (type === 'circle' || type === 'dashboard') {
    progress = /*#__PURE__*/React.createElement(Circle, Object.assign({}, props, {
      strokeColor: strokeColorNotArray,
      prefixCls: prefixCls,
      progressStatus: progressStatus
    }), progressInfo);
  }
  const classString = classNames(prefixCls, {
    [`${prefixCls}-inline-circle`]: type === 'circle' && props.width <= 20,
    [`${prefixCls}-${type === 'dashboard' && 'circle' || steps && 'steps' || type}`]: true,
    [`${prefixCls}-status-${progressStatus}`]: true,
    [`${prefixCls}-show-info`]: showInfo,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  return wrapSSR( /*#__PURE__*/React.createElement("div", Object.assign({
    className: classString,
    role: "progressbar"
  }, omit(restProps, ['trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeLinecap', 'success', 'successPercent'])), progress));
};
if (process.env.NODE_ENV !== 'production') {
  Progress.displayName = 'Progress';
}
export default Progress;