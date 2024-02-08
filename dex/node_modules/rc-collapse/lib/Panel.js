"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rcMotion = _interopRequireDefault(require("rc-motion"));

var React = _interopRequireWildcard(require("react"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _PanelContent = _interopRequireDefault(require("./PanelContent"));

var _excluded = ["className", "id", "style", "prefixCls", "headerClass", "children", "isActive", "destroyInactivePanel", "accordion", "forceRender", "openMotion", "extra", "collapsible"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CollapsePanel = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(CollapsePanel, _React$Component);

  var _super = (0, _createSuper2.default)(CollapsePanel);

  function CollapsePanel() {
    var _this;

    (0, _classCallCheck2.default)(this, CollapsePanel);

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

  (0, _createClass2.default)(CollapsePanel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowequal.default)(this.props, nextProps);
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
          rest = (0, _objectWithoutProperties2.default)(_this$props4, _excluded);
      var disabled = collapsible === 'disabled';
      var collapsibleHeader = collapsible === 'header';
      var collapsibleIcon = collapsible === 'icon';
      var itemCls = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-item"), true), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-item-active"), isActive), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-item-disabled"), disabled), _classNames), className);
      var headerCls = (0, _classnames.default)("".concat(prefixCls, "-header"), (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, headerClass, headerClass), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-header-collapsible-only"), collapsibleHeader), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-icon-collapsible-only"), collapsibleIcon), _classNames2));
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
      return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({}, rest, {
        className: itemCls,
        style: style,
        id: id
      }), /*#__PURE__*/React.createElement("div", headerProps, this.renderIcon(), this.renderTitle(), ifExtraExist && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra)), /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
        visible: isActive,
        leavedClassName: "".concat(prefixCls, "-content-hidden")
      }, openMotion, {
        forceRender: forceRender,
        removeOnLeave: destroyInactivePanel
      }), function (_ref, ref) {
        var motionClassName = _ref.className,
            motionStyle = _ref.style;
        return /*#__PURE__*/React.createElement(_PanelContent.default, {
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
var _default = CollapsePanel;
exports.default = _default;