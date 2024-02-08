"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MotionThumb;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _rcMotion = _interopRequireDefault(require("rc-motion"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

var _ref2 = require("rc-util/lib/ref");

var calcThumbStyle = function calcThumbStyle(targetElement) {
  return targetElement ? {
    left: targetElement.offsetLeft,
    width: targetElement.clientWidth
  } : null;
};

var toPX = function toPX(value) {
  return value !== undefined ? "".concat(value, "px") : undefined;
};

function MotionThumb(props) {
  var prefixCls = props.prefixCls,
      containerRef = props.containerRef,
      value = props.value,
      getValueIndex = props.getValueIndex,
      motionName = props.motionName,
      onMotionStart = props.onMotionStart,
      onMotionEnd = props.onMotionEnd;
  var thumbRef = React.useRef(null);

  var _React$useState = React.useState(value),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      prevValue = _React$useState2[0],
      setPrevValue = _React$useState2[1]; // =========================== Effect ===========================


  var findValueElement = function findValueElement(val) {
    var _containerRef$current;

    var index = getValueIndex(val);
    var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(prefixCls, "-item"))[index];
    return ele;
  };

  var _React$useState3 = React.useState(null),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      prevStyle = _React$useState4[0],
      setPrevStyle = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      nextStyle = _React$useState6[0],
      setNextStyle = _React$useState6[1];

  (0, _useLayoutEffect.default)(function () {
    if (prevValue !== value) {
      var prev = findValueElement(prevValue);
      var next = findValueElement(value);
      var calcPrevStyle = calcThumbStyle(prev);
      var calcNextStyle = calcThumbStyle(next);
      setPrevValue(value);
      setPrevStyle(calcPrevStyle);
      setNextStyle(calcNextStyle);

      if (prev && next) {
        onMotionStart();
      } else {
        onMotionEnd();
      }
    }
  }, [value]); // =========================== Motion ===========================

  var onAppearStart = function onAppearStart() {
    return {
      transform: "translateX(var(--thumb-start-left))",
      width: "var(--thumb-start-width)"
    };
  };

  var onAppearActive = function onAppearActive() {
    return {
      transform: "translateX(var(--thumb-active-left))",
      width: "var(--thumb-active-width)"
    };
  };

  var onAppearEnd = function onAppearEnd() {
    setPrevStyle(null);
    setNextStyle(null);
    onMotionEnd();
  }; // =========================== Render ===========================
  // No need motion when nothing exist in queue


  if (!prevStyle || !nextStyle) {
    return null;
  }

  return /*#__PURE__*/React.createElement(_rcMotion.default, {
    visible: true,
    motionName: motionName,
    motionAppear: true,
    onAppearStart: onAppearStart,
    onAppearActive: onAppearActive,
    onAppearEnd: onAppearEnd
  }, function (_ref, ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, motionStyle), {}, {
      '--thumb-start-left': toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.left),
      '--thumb-start-width': toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.width),
      '--thumb-active-left': toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.left),
      '--thumb-active-width': toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.width)
    }); // It's little ugly which should be refactor when @umi/test update to latest jsdom

    var motionProps = {
      ref: (0, _ref2.composeRef)(thumbRef, ref),
      style: mergedStyle,
      className: (0, _classnames.default)("".concat(prefixCls, "-thumb"), motionClassName)
    };

    if (process.env.NODE_ENV === 'test') {
      motionProps['data-test-style'] = JSON.stringify(mergedStyle);
    }

    return /*#__PURE__*/React.createElement("div", (0, _objectSpread2.default)({}, motionProps));
  });
}