"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _context = require("@rc-component/context");

var _classnames = _interopRequireDefault(require("classnames"));

var _isEqual = _interopRequireDefault(require("rc-util/lib/isEqual"));

var _ref6 = require("rc-util/lib/ref");

var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));

var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

var React = _interopRequireWildcard(require("react"));

var _PerfContext = _interopRequireDefault(require("../context/PerfContext"));

var _TableContext = _interopRequireDefault(require("../context/TableContext"));

var _valueUtil = require("../utils/valueUtil");

var _excluded = ["colSpan", "rowSpan", "style", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** Check if cell is in hover range */
function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}

function isRenderCell(data) {
  return data && (0, _typeof2.default)(data) === 'object' && !Array.isArray(data) && ! /*#__PURE__*/React.isValidElement(data);
}

function isRefComponent(component) {
  // String tag component also support ref
  if (typeof component === 'string') {
    return true;
  }

  return (0, _ref6.supportRef)(component);
}

var getTitleFromCellRenderChildren = function getTitleFromCellRenderChildren(_ref) {
  var ellipsis = _ref.ellipsis,
      rowType = _ref.rowType,
      children = _ref.children;
  var title;
  var ellipsisConfig = ellipsis === true ? {
    showTitle: true
  } : ellipsis;

  if (ellipsisConfig && (ellipsisConfig.showTitle || rowType === 'header')) {
    if (typeof children === 'string' || typeof children === 'number') {
      title = children.toString();
    } else if ( /*#__PURE__*/React.isValidElement(children) && typeof children.props.children === 'string') {
      title = children.props.children;
    }
  }

  return title;
};

function Cell(_ref2, ref) {
  var _ref4, _ref5, _classNames;

  var prefixCls = _ref2.prefixCls,
      className = _ref2.className,
      record = _ref2.record,
      index = _ref2.index,
      renderIndex = _ref2.renderIndex,
      dataIndex = _ref2.dataIndex,
      render = _ref2.render,
      children = _ref2.children,
      _ref2$component = _ref2.component,
      Component = _ref2$component === void 0 ? 'td' : _ref2$component,
      colSpan = _ref2.colSpan,
      rowSpan = _ref2.rowSpan,
      scope = _ref2.scope,
      fixLeft = _ref2.fixLeft,
      fixRight = _ref2.fixRight,
      firstFixLeft = _ref2.firstFixLeft,
      lastFixLeft = _ref2.lastFixLeft,
      firstFixRight = _ref2.firstFixRight,
      lastFixRight = _ref2.lastFixRight,
      appendNode = _ref2.appendNode,
      _ref2$additionalProps = _ref2.additionalProps,
      additionalProps = _ref2$additionalProps === void 0 ? {} : _ref2$additionalProps,
      ellipsis = _ref2.ellipsis,
      align = _ref2.align,
      rowType = _ref2.rowType,
      isSticky = _ref2.isSticky,
      hovering = _ref2.hovering,
      onHover = _ref2.onHover;
  var cellPrefixCls = "".concat(prefixCls, "-cell");
  var perfRecord = React.useContext(_PerfContext.default);

  var _useContext = (0, _context.useContext)(_TableContext.default, ['supportSticky', 'allColumnsFixedLeft']),
      supportSticky = _useContext.supportSticky,
      allColumnsFixedLeft = _useContext.allColumnsFixedLeft; // ==================== Child Node ====================


  var _React$useMemo = React.useMemo(function () {
    if ((0, _valueUtil.validateValue)(children)) {
      return [children];
    }

    var path = dataIndex === null || dataIndex === undefined || dataIndex === '' ? [] : Array.isArray(dataIndex) ? dataIndex : [dataIndex];
    var value = (0, _get.default)(record, path); // Customize render node

    var returnChildNode = value;
    var returnCellProps = undefined;

    if (render) {
      var renderData = render(value, record, renderIndex);

      if (isRenderCell(renderData)) {
        if (process.env.NODE_ENV !== 'production') {
          (0, _warning.default)(false, '`columns.render` return cell props is deprecated with perf issue, please use `onCell` instead.');
        }

        returnChildNode = renderData.children;
        returnCellProps = renderData.props;
        perfRecord.renderWithProps = true;
      } else {
        returnChildNode = renderData;
      }
    }

    return [returnChildNode, returnCellProps];
  }, [
  /* eslint-disable react-hooks/exhaustive-deps */
  // Always re-render if `renderWithProps`
  perfRecord.renderWithProps ? Math.random() : 0,
  /* eslint-enable */
  children, dataIndex, perfRecord, record, render, renderIndex]),
      _React$useMemo2 = (0, _slicedToArray2.default)(_React$useMemo, 2),
      childNode = _React$useMemo2[0],
      legacyCellProps = _React$useMemo2[1];

  var mergedChildNode = childNode; // Not crash if final `childNode` is not validate ReactNode

  if ((0, _typeof2.default)(mergedChildNode) === 'object' && !Array.isArray(mergedChildNode) && ! /*#__PURE__*/React.isValidElement(mergedChildNode)) {
    mergedChildNode = null;
  }

  if (ellipsis && (lastFixLeft || firstFixRight)) {
    mergedChildNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(cellPrefixCls, "-content")
    }, mergedChildNode);
  }

  var _ref3 = legacyCellProps || {},
      cellColSpan = _ref3.colSpan,
      cellRowSpan = _ref3.rowSpan,
      cellStyle = _ref3.style,
      cellClassName = _ref3.className,
      restCellProps = (0, _objectWithoutProperties2.default)(_ref3, _excluded);

  var mergedColSpan = (_ref4 = cellColSpan !== undefined ? cellColSpan : colSpan) !== null && _ref4 !== void 0 ? _ref4 : 1;
  var mergedRowSpan = (_ref5 = cellRowSpan !== undefined ? cellRowSpan : rowSpan) !== null && _ref5 !== void 0 ? _ref5 : 1;

  if (mergedColSpan === 0 || mergedRowSpan === 0) {
    return null;
  } // ====================== Fixed =======================


  var fixedStyle = {};
  var isFixLeft = typeof fixLeft === 'number' && supportSticky;
  var isFixRight = typeof fixRight === 'number' && supportSticky;

  if (isFixLeft) {
    fixedStyle.position = 'sticky';
    fixedStyle.left = fixLeft;
  }

  if (isFixRight) {
    fixedStyle.position = 'sticky';
    fixedStyle.right = fixRight;
  } // ====================== Align =======================


  var alignStyle = {};

  if (align) {
    alignStyle.textAlign = align;
  } // ====================== Hover =======================


  var onMouseEnter = function onMouseEnter(event) {
    var _additionalProps$onMo;

    if (record) {
      onHover(index, index + mergedRowSpan - 1);
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo = additionalProps.onMouseEnter) === null || _additionalProps$onMo === void 0 ? void 0 : _additionalProps$onMo.call(additionalProps, event);
  };

  var onMouseLeave = function onMouseLeave(event) {
    var _additionalProps$onMo2;

    if (record) {
      onHover(-1, -1);
    }

    additionalProps === null || additionalProps === void 0 ? void 0 : (_additionalProps$onMo2 = additionalProps.onMouseLeave) === null || _additionalProps$onMo2 === void 0 ? void 0 : _additionalProps$onMo2.call(additionalProps, event);
  }; // ====================== Render ======================


  var title = getTitleFromCellRenderChildren({
    rowType: rowType,
    ellipsis: ellipsis,
    children: childNode
  });
  var componentProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
    title: title
  }, restCellProps), additionalProps), {}, {
    colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
    rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
    scope: scope,
    className: (0, _classnames.default)(cellPrefixCls, className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-left-all"), lastFixLeft && allColumnsFixedLeft && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky), (0, _defineProperty2.default)(_classNames, "".concat(cellPrefixCls, "-row-hover"), !legacyCellProps && hovering), _classNames), additionalProps.className, cellClassName),
    style: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, additionalProps.style), alignStyle), fixedStyle), cellStyle),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    ref: isRefComponent(Component) ? ref : null
  });
  return /*#__PURE__*/React.createElement(Component, componentProps, appendNode, mergedChildNode);
}

var RefCell = /*#__PURE__*/React.forwardRef(Cell);
RefCell.displayName = 'Cell';
var comparePropList = ['expanded', 'className', 'hovering'];
var MemoCell = /*#__PURE__*/React.memo(RefCell, function (prev, next) {
  if (next.shouldCellUpdate) {
    return (// Additional handle of expanded logic
      comparePropList.every(function (propName) {
        return prev[propName] === next[propName];
      }) && // User control update logic
      !next.shouldCellUpdate(next.record, prev.record)
    );
  }

  return (0, _isEqual.default)(prev, next, true);
});
/** Inject hover data here, we still wish MemoCell keep simple `shouldCellUpdate` logic */

var WrappedCell = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var index = props.index,
      _props$additionalProp = props.additionalProps,
      additionalProps = _props$additionalProp === void 0 ? {} : _props$additionalProp,
      colSpan = props.colSpan,
      rowSpan = props.rowSpan;
  var cellColSpan = additionalProps.colSpan,
      cellRowSpan = additionalProps.rowSpan;
  var mergedColSpan = colSpan !== null && colSpan !== void 0 ? colSpan : cellColSpan;
  var mergedRowSpan = rowSpan !== null && rowSpan !== void 0 ? rowSpan : cellRowSpan;

  var _useContext2 = (0, _context.useContext)(_TableContext.default, function (cxt) {
    var isHovering = inHoverRange(index, mergedRowSpan || 1, cxt === null || cxt === void 0 ? void 0 : cxt.hoverStartRow, cxt === null || cxt === void 0 ? void 0 : cxt.hoverEndRow);
    return {
      onHover: cxt === null || cxt === void 0 ? void 0 : cxt.onHover,
      hovering: isHovering
    };
  }),
      onHover = _useContext2.onHover,
      hovering = _useContext2.hovering;

  return /*#__PURE__*/React.createElement(MemoCell, (0, _extends2.default)({}, props, {
    colSpan: mergedColSpan,
    rowSpan: mergedRowSpan,
    hovering: hovering,
    ref: ref,
    onHover: onHover
  }));
});
WrappedCell.displayName = 'WrappedCell';
var _default = WrappedCell;
exports.default = _default;