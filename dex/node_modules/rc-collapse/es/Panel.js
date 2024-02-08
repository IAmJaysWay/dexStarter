import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
var _excluded = ["className", "id", "style", "prefixCls", "headerClass", "children", "isActive", "destroyInactivePanel", "accordion", "forceRender", "openMotion", "extra", "collapsible"];

/* eslint-disable react/prop-types */
import classNames from 'classnames';
import CSSMotion from 'rc-motion';
import * as React from 'react';
import shallowEqual from 'shallowequal';
import PanelContent from './PanelContent';

var CollapsePanel = /*#__PURE__*/function (_React$Component) {
  _inherits(CollapsePanel, _React$Component);

  var _super = _createSuper(CollapsePanel);

  function CollapsePanel() {
    var _this;

    _classCallCheck(this, CollapsePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onItemClick = function () {
      var _this$props = _this.props,
          onItemClick = _this$props.onItemClick,
          panelKey = _this$props.panelKey;

      if (typeof onItemClick === 'function') {
        onItemClick(panelKey);
      }
    };

    _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.onItemClick();
      }
    };

    _this.renderIcon = function () {
      var _this$props2 = _this.props,
          showArrow = _this$props2.showArrow,
          expandIcon = _this$props2.expandIcon,
          prefixCls = _this$props2.prefixCls,
          collapsible = _this$props2.collapsible;

      if (!showArrow) {
        return null;
      }

      var iconNode = typeof expandIcon === 'function' ? expandIcon(_this.props) : /*#__PURE__*/React.createElement("i", {
        className: "arrow"
      });
      return iconNode && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-expand-icon"),
        onClick: collapsible === 'header' || collapsible === 'icon' ? _this.onItemClick : null
      }, iconNode);
    };

    _this.renderTitle = function () {
      var _this$props3 = _this.props,
          header = _this$props3.header,
          prefixCls = _this$props3.prefixCls,
          collapsible = _this$props3.collapsible;
      return /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-text"),
        onClick: collapsible === 'header' ? _this.onItemClick : null
      }, header);
    };

    return _this;
  }

  _createClass(CollapsePanel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !shallowEqual(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props4 = this.props,
          className = _this$props4.className,
          id = _this$props4.id,
          style = _this$props4.style,
          prefixCls = _this$props4.prefixCls,
          headerClass = _this$props4.headerClass,
          children = _this$props4.children,
          isActive = _this$props4.isActive,
          destroyInactivePanel = _this$props4.destroyInactivePanel,
          accordion = _this$props4.accordion,
          forceRender = _this$props4.forceRender,
          openMotion = _this$props4.openMotion,
          extra = _this$props4.extra,
          collapsible = _this$props4.collapsible,
          rest = _objectWithoutProperties(_this$props4, _excluded);

      var disabled = collapsible === 'disabled';
      var collapsibleHeader = collapsible === 'header';
      var collapsibleIcon = collapsible === 'icon';
      var itemCls = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-item-active"), isActive), _defineProperty(_classNames, "".concat(prefixCls, "-item-disabled"), disabled), _classNames), className);
      var headerCls = classNames("".concat(prefixCls, "-header"), (_classNames2 = {}, _defineProperty(_classNames2, headerClass, headerClass), _defineProperty(_classNames2, "".concat(prefixCls, "-header-collapsible-only"), collapsibleHeader), _defineProperty(_classNames2, "".concat(prefixCls, "-icon-collapsible-only"), collapsibleIcon), _classNames2));
      /** header 节点属性 */

      var headerProps = {
        className: headerCls,
        'aria-expanded': isActive,
        'aria-disabled': disabled,
        onKeyPress: this.handleKeyPress
      };

      if (!collapsibleHeader && !collapsibleIcon) {
        headerProps.onClick = this.onItemClick;
        headerProps.role = accordion ? 'tab' : 'button';
        headerProps.tabIndex = disabled ? -1 : 0;
      }

      var ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean'; // https://github.com/ant-design/ant-design/pull/37419#issuecomment-1238812797

      delete rest.header;
      delete rest.panelKey;
      delete rest.onItemClick;
      delete rest.showArrow;
      delete rest.expandIcon;
      return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        className: itemCls,
        style: style,
        id: id
      }), /*#__PURE__*/React.createElement("div", headerProps, this.renderIcon(), this.renderTitle(), ifExtraExist && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra)), /*#__PURE__*/React.createElement(CSSMotion, _extends({
        visible: isActive,
        leavedClassName: "".concat(prefixCls, "-content-hidden")
      }, openMotion, {
        forceRender: forceRender,
        removeOnLeave: destroyInactivePanel
      }), function (_ref, ref) {
        var motionClassName = _ref.className,
            motionStyle = _ref.style;
        return /*#__PURE__*/React.createElement(PanelContent, {
          ref: ref,
          prefixCls: prefixCls,
          className: motionClassName,
          style: motionStyle,
          isActive: isActive,
          forceRender: forceRender,
          role: accordion ? 'tabpanel' : null
        }, children);
      }));
    }
  }]);

  return CollapsePanel;
}(React.Component);

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  onItemClick: function onItemClick() {},
  headerClass: '',
  forceRender: false
};
export default CollapsePanel;