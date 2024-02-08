"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
const Steps = props => {
  const {
    size,
    steps,
    percent = 0,
    strokeWidth = 8,
    strokeColor,
    trailColor = null,
    prefixCls,
    children
  } = props;
  const current = Math.round(steps * (percent / 100));
  const stepWidth = size === 'small' ? 2 : 14;
  const styledSteps = new Array(steps);
  for (let i = 0; i < steps; i++) {
    const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
    styledSteps[i] = /*#__PURE__*/React.createElement("div", {
      key: i,
      className: (0, _classnames.default)(`${prefixCls}-steps-item`, {
        [`${prefixCls}-steps-item-active`]: i <= current - 1
      }),
      style: {
        backgroundColor: i <= current - 1 ? color : trailColor,
        width: stepWidth,
        height: strokeWidth
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-steps-outer`
  }, styledSteps, children);
};
var _default = Steps;
exports.default = _default;