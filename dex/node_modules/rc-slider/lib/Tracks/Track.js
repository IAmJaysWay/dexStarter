"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Track;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _context = _interopRequireDefault(require("../context"));

var _util = require("../util");

function Track(props) {
  var prefixCls = props.prefixCls,
      style = props.style,
      start = props.start,
      end = props.end,
      index = props.index,
      onStartMove = props.onStartMove;

  var _React$useContext = React.useContext(_context.default),
      direction = _React$useContext.direction,
      min = _React$useContext.min,
      max = _React$useContext.max,
      disabled = _React$useContext.disabled,
      range = _React$useContext.range;

  var trackPrefixCls = "".concat(prefixCls, "-track");
  var offsetStart = (0, _util.getOffset)(start, min, max);
  var offsetEnd = (0, _util.getOffset)(end, min, max); // ============================ Events ============================

  var onInternalStartMove = function onInternalStartMove(e) {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  }; // ============================ Render ============================


  var positionStyle = {};

  switch (direction) {
    case 'rtl':
      positionStyle.right = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    case 'btt':
      positionStyle.bottom = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    case 'ttb':
      positionStyle.top = "".concat(offsetStart * 100, "%");
      positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
      break;

    default:
      positionStyle.left = "".concat(offsetStart * 100, "%");
      positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
  }

  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames.default)(trackPrefixCls, range && "".concat(trackPrefixCls, "-").concat(index + 1)),
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove
  });
}