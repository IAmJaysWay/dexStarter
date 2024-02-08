"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _CloseCircleFilled = _interopRequireDefault(require("@ant-design/icons/CloseCircleFilled"));
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
var _context = require("../form/context");
var _reactNode = require("../_util/reactNode");
var _statusUtils = require("../_util/statusUtils");
const ClearableInputType = ['text', 'input'];
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
let ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ClearableLabeledInput, _React$Component);
  var _super = (0, _createSuper2.default)(ClearableLabeledInput);
  function ClearableLabeledInput() {
    (0, _classCallCheck2.default)(this, ClearableLabeledInput);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      const {
        value,
        disabled,
        readOnly,
        handleReset,
        suffix
      } = this.props;
      const needClear = !disabled && !readOnly && value;
      const className = `${prefixCls}-clear-icon`;
      return /*#__PURE__*/React.createElement(_CloseCircleFilled.default, {
        onClick: handleReset,
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown: e => e.preventDefault(),
        className: (0, _classnames.default)({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        role: "button"
      });
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element, statusContext) {
      const {
        value,
        allowClear,
        className,
        style,
        direction,
        bordered,
        hidden,
        status: customStatus,
        hashId
      } = this.props;
      const {
        status: contextStatus,
        hasFeedback
      } = statusContext;
      if (!allowClear) {
        return (0, _reactNode.cloneElement)(element, {
          value
        });
      }
      const affixWrapperCls = (0, _classnames.default)(`${prefixCls}-affix-wrapper`, `${prefixCls}-affix-wrapper-textarea-with-clear-btn`, (0, _statusUtils.getStatusClassNames)(`${prefixCls}-affix-wrapper`, (0, _statusUtils.getMergedStatus)(contextStatus, customStatus), hasFeedback), {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        // className will go to addon wrapper
        [`${className}`]: !hasAddon(this.props) && className
      }, hashId);
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style,
        hidden: hidden
      }, (0, _reactNode.cloneElement)(element, {
        style: null,
        value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_context.FormItemInputContext.Consumer, null, statusContext => {
        const {
          prefixCls,
          inputType,
          element
        } = this.props;
        if (inputType === ClearableInputType[0]) {
          return this.renderTextAreaWithClearIcon(prefixCls, element, statusContext);
        }
      });
    }
  }]);
  return ClearableLabeledInput;
}(React.Component);
var _default = ClearableLabeledInput;
exports.default = _default;