"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _Handle = _interopRequireDefault(require("./Handle"));

var _util = require("../util");

var _excluded = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];
var Handles = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      style = props.style,
      onStartMove = props.onStartMove,
      onOffsetChange = props.onOffsetChange,
      values = props.values,
      handleRender = props.handleRender,
      draggingIndex = props.draggingIndex,
      restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var handlesRef = React.useRef({});
  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus(index) {
        var _handlesRef$current$i;

        (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 ? void 0 : _handlesRef$current$i.focus();
      }
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, values.map(function (value, index) {
    return /*#__PURE__*/React.createElement(_Handle.default, (0, _extends2.default)({
      ref: function ref(node) {
        if (!node) {
          delete handlesRef.current[index];
        } else {
          handlesRef.current[index] = node;
        }
      },
      dragging: draggingIndex === index,
      prefixCls: prefixCls,
      style: (0, _util.getIndex)(style, index),
      key: index,
      value: value,
      valueIndex: index,
      onStartMove: onStartMove,
      onOffsetChange: onOffsetChange,
      render: handleRender
    }, restProps));
  }));
});

if (process.env.NODE_ENV !== 'production') {
  Handles.displayName = 'Handles';
}

var _default = Handles;
exports.default = _default;