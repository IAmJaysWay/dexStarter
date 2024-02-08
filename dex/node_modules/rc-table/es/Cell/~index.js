import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
var _excluded = ["colSpan", "rowSpan", "style", "className"];
import { useContext } from '@rc-component/context';
import classNames from 'classnames';
import isEqual from "rc-util/es/isEqual";
import { supportRef } from "rc-util/es/ref";
import getValue from "rc-util/es/utils/get";
import warning from "rc-util/es/warning";
import * as React from 'react';
import PerfContext from "../context/PerfContext";
import TableContext from "../context/TableContext";
import { validateValue } from "../utils/valueUtil";
/** Check if cell is in hover range */

function inHoverRange(cellStartRow, cellRowSpan, startRow, endRow) {
  var cellEndRow = cellStartRow + cellRowSpan - 1;
  return cellStartRow <= endRow && cellEndRow >= startRow;
}

function isRenderCell(data) {
  return data && _typeof(data) === 'object' && !Array.isArray(data) && ! /*#__PURE__*/React.isValidElement(data);
}

function isRefComponent(component) {
  // String tag component also support ref
  if (typeof component === 'string') {
    return true;
  }

  return supportRef(component);
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
  var perfRecord = React.useContext(PerfContext);

  var _useContext = useContext(TableContext, ['supportSticky', 'allColumnsFixedLeft']),
      supportSticky = _useContext.supportSticky,
      allColumnsFixedLeft = _useContext.allColumnsFixedLeft; // ==================== Child Node ====================


  var _React$useMemo = React.useMemo(function () {
    if (validateValue(children)) {
      return [children];
    }

    var path = dataIndex === null || dataIndex === undefined || dataIndex === '' ? [] : Array.isArray(dataIndex) ? dataIndex : [dataIndex];
    var value = getValue(record, path); // Customize render node

    var returnChildNode = value;
    var returnCellProps = undefined;

    if (render) {
      var renderData = render(value, record, renderIndex);

      if (isRenderCell(renderData)) {
        if (process.env.NODE_ENV !== 'production') {
          warning(false, '`columns.render` return cell props is deprecated with perf issue, please use `onCell` instead.');
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
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      childNode = _React$useMemo2[0],
      legacyCellProps = _React$useMemo2[1];

  var mergedChildNode = childNode; // Not crash if final `childNode` is not validate ReactNode

  if (_typeof(mergedChildNode) === 'object' && !Array.isArray(mergedChildNode) && ! /*#__PURE__*/React.isValidElement(mergedChildNode)) {
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
      restCellProps = _objectWithoutProperties(_ref3, _excluded);

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

  var componentProps = _objectSpread(_objectSpread(_objectSpread({
    title: title
  }, restCellProps), additionalProps), {}, {
    colSpan: mergedColSpan !== 1 ? mergedColSpan : null,
    rowSpan: mergedRowSpan !== 1 ? mergedRowSpan : null,
    scope: scope,
    className: classNames(cellPrefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left"), isFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left-first"), firstFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left-last"), lastFixLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-left-all"), lastFixLeft && allColumnsFixedLeft && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right"), isFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right-first"), firstFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-right-last"), lastFixRight && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-ellipsis"), ellipsis), _defineProperty(_classNames, "".concat(cellPrefixCls, "-with-append"), appendNode), _defineProperty(_classNames, "".concat(cellPrefixCls, "-fix-sticky"), (isFixLeft || isFixRight) && isSticky && supportSticky), _defineProperty(_classNames, "".concat(cellPrefixCls, "-row-hover"), !legacyCellProps && hovering), _classNames), additionalProps.className, cellClassName),
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, additionalProps.style), alignStyle), fixedStyle), cellStyle),
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

  return isEqual(prev, next, true);
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

  var _useContext2 = useContext(TableContext, function (cxt) {
    var isHovering = inHoverRange(index, mergedRowSpan || 1, cxt === null || cxt === void 0 ? void 0 : cxt.hoverStartRow, cxt === null || cxt === void 0 ? void 0 : cxt.hoverEndRow);
    return {
      onHover: cxt === null || cxt === void 0 ? void 0 : cxt.onHover,
      hovering: isHovering
    };
  }),
      onHover = _useContext2.onHover,
      hovering = _useContext2.hovering;

  return /*#__PURE__*/React.createElement(MemoCell, _extends({}, props, {
    colSpan: mergedColSpan,
    rowSpan: mergedRowSpan,
    hovering: hovering,
    ref: ref,
    onHover: onHover
  }));
});
WrappedCell.displayName = 'WrappedCell';
export default WrappedCell;