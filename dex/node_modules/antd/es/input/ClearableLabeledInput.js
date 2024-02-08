import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import CloseCircleFilled from "@ant-design/icons/es/icons/CloseCircleFilled";
import classNames from 'classnames';
import * as React from 'react';
import { FormItemInputContext } from '../form/context';
import { cloneElement } from '../_util/reactNode';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
const ClearableInputType = ['text', 'input'];
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
let ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  _inherits(ClearableLabeledInput, _React$Component);
  var _super = _createSuper(ClearableLabeledInput);
  function ClearableLabeledInput() {
    _classCallCheck(this, ClearableLabeledInput);
    return _super.apply(this, arguments);
  }
  _createClass(ClearableLabeledInput, [{
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
      return /*#__PURE__*/React.createElement(CloseCircleFilled, {
        onClick: handleReset,
        // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        onMouseDown: e => e.preventDefault(),
        className: classNames({
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
        return cloneElement(element, {
          value
        });
      }
      const affixWrapperCls = classNames(`${prefixCls}-affix-wrapper`, `${prefixCls}-affix-wrapper-textarea-with-clear-btn`, getStatusClassNames(`${prefixCls}-affix-wrapper`, getMergedStatus(contextStatus, customStatus), hasFeedback), {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        // className will go to addon wrapper
        [`${className}`]: !hasAddon(this.props) && className
      }, hashId);
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style,
        hidden: hidden
      }, cloneElement(element, {
        style: null,
        value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(FormItemInputContext.Consumer, null, statusContext => {
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
export default ClearableLabeledInput;