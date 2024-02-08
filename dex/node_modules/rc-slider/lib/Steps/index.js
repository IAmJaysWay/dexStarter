"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Steps;

var React = _interopRequireWildcard(require("react"));

var _context = _interopRequireDefault(require("../context"));

var _Dot = _interopRequireDefault(require("./Dot"));

function Steps(props) {
  var prefixCls = props.prefixCls,
      marks = props.marks,
      dots = props.dots,
      style = props.style,
      activeStyle = props.activeStyle;

  var _React$useContext = React.useContext(_context.default),
      min = _React$useContext.min,
      max = _React$useContext.max,
      step = _React$useContext.step;

  var stepDots = React.useMemo(function () {
    var dotSet = new Set(); // Add marks

    marks.forEach(function (mark) {
      dotSet.add(mark.value);
    }); // Fill dots

    if (dots && step !== null) {
      var current = min;

      while (current <= max) {
        dotSet.add(current);
        current += step;
      }
    }

    return Array.from(dotSet);
  }, [min, max, step, dots, marks]);
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-step")
  }, stepDots.map(function (dotValue) {
    return /*#__PURE__*/React.createElement(_Dot.default, {
      prefixCls: prefixCls,
      key: dotValue,
      value: dotValue,
      style: style,
      activeStyle: activeStyle
    });
  }));
}