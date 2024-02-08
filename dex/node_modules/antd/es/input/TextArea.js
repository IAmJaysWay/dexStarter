import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import classNames from 'classnames';
import RcTextArea from 'rc-textarea';
import useMergedState from "rc-util/es/hooks/useMergedState";
import omit from "rc-util/es/omit";
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import DisabledContext from '../config-provider/DisabledContext';
import SizeContext from '../config-provider/SizeContext';
import { FormItemInputContext } from '../form/context';
import { getMergedStatus, getStatusClassNames } from '../_util/statusUtils';
import ClearableLabeledInput from './ClearableLabeledInput';
import { fixControlledValue, resolveOnChange, triggerFocus } from './Input';
import useStyle from './style';
function fixEmojiLength(value, maxLength) {
  return _toConsumableArray(value || '').slice(0, maxLength).join('');
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  let newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if (_toConsumableArray(preValue || '').length < triggerValue.length && _toConsumableArray(triggerValue || '').length > maxLength) {
    // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
const TextArea = /*#__PURE__*/React.forwardRef((_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      showCount = false,
      maxLength,
      className,
      style,
      size: customizeSize,
      disabled: customDisabled,
      onCompositionStart,
      onCompositionEnd,
      onChange,
      status: customStatus
    } = _a,
    props = __rest(_a, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "disabled", "onCompositionStart", "onCompositionEnd", "onChange", "status"]);
  const {
    getPrefixCls,
    direction
  } = React.useContext(ConfigContext);
  const size = React.useContext(SizeContext);
  // ===================== Disabled =====================
  const disabled = React.useContext(DisabledContext);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = React.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const innerRef = React.useRef(null);
  const clearableInputRef = React.useRef(null);
  const [compositing, setCompositing] = React.useState(false);
  const oldCompositionValueRef = React.useRef();
  const oldSelectionStartRef = React.useRef(0);
  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value
  });
  const {
    hidden
  } = props;
  const handleSetValue = (val, callback) => {
    if (props.value === undefined) {
      setValue(val);
      callback === null || callback === void 0 ? void 0 : callback();
    }
  };
  // =========================== Value Update ===========================
  // Max length value
  const hasMaxLength = Number(maxLength) > 0;
  const onInternalCompositionStart = e => {
    setCompositing(true);
    // 拼音输入前保存一份旧值
    oldCompositionValueRef.current = value;
    // 保存旧的光标位置
    oldSelectionStartRef.current = e.currentTarget.selectionStart;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  const onInternalCompositionEnd = e => {
    var _a;
    setCompositing(false);
    let triggerValue = e.currentTarget.value;
    if (hasMaxLength) {
      const isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_a = oldCompositionValueRef.current) === null || _a === void 0 ? void 0 : _a.length);
      triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
    }
    // Patch composition onChange when value changed
    if (triggerValue !== value) {
      handleSetValue(triggerValue);
      resolveOnChange(e.currentTarget, e, onChange, triggerValue);
    }
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  const handleChange = e => {
    let triggerValue = e.target.value;
    if (!compositing && hasMaxLength) {
      // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
      const isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
      triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
    }
    handleSetValue(triggerValue);
    resolveOnChange(e.currentTarget, e, onChange, triggerValue);
  };
  // ============================== Reset ===============================
  const handleReset = e => {
    var _a, _b, _c;
    handleSetValue('');
    (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    resolveOnChange((_c = (_b = innerRef.current) === null || _b === void 0 ? void 0 : _b.resizableTextArea) === null || _c === void 0 ? void 0 : _c.textArea, e, onChange);
  };
  const prefixCls = getPrefixCls('input', customizePrefixCls);
  // Style
  const [wrapSSR, hashId] = useStyle(prefixCls);
  React.useImperativeHandle(ref, () => {
    var _a;
    return {
      resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
      focus: option => {
        var _a, _b;
        triggerFocus((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: () => {
        var _a;
        return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  });
  const textArea = /*#__PURE__*/React.createElement(RcTextArea, Object.assign({}, omit(props, ['allowClear']), {
    disabled: mergedDisabled,
    className: classNames({
      [`${prefixCls}-borderless`]: !bordered,
      [className]: className && !showCount,
      [`${prefixCls}-sm`]: size === 'small' || customizeSize === 'small',
      [`${prefixCls}-lg`]: size === 'large' || customizeSize === 'large'
    }, getStatusClassNames(prefixCls, mergedStatus), hashId),
    style: showCount ? {
      resize: style === null || style === void 0 ? void 0 : style.resize
    } : style,
    prefixCls: prefixCls,
    onCompositionStart: onInternalCompositionStart,
    onChange: handleChange,
    onCompositionEnd: onInternalCompositionEnd,
    ref: innerRef
  }));
  let val = fixControlledValue(value);
  if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) {
    // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    val = fixEmojiLength(val, maxLength);
  }
  // TextArea
  const textareaNode = /*#__PURE__*/React.createElement(ClearableLabeledInput, Object.assign({
    disabled: mergedDisabled
  }, props, {
    prefixCls: prefixCls,
    direction: direction,
    inputType: "text",
    value: val,
    element: textArea,
    handleReset: handleReset,
    ref: clearableInputRef,
    bordered: bordered,
    status: customStatus,
    style: showCount ? undefined : style,
    hashId: hashId
  }));
  // Only show text area wrapper when needed
  if (showCount || hasFeedback) {
    const valueLength = _toConsumableArray(val).length;
    let dataCount = '';
    if (typeof showCount === 'object') {
      dataCount = showCount.formatter({
        value: val,
        count: valueLength,
        maxLength
      });
    } else {
      dataCount = `${valueLength}${hasMaxLength ? ` / ${maxLength}` : ''}`;
    }
    return /*#__PURE__*/React.createElement("div", {
      hidden: hidden,
      className: classNames(`${prefixCls}-textarea`, {
        [`${prefixCls}-textarea-rtl`]: direction === 'rtl',
        [`${prefixCls}-textarea-show-count`]: showCount
      }, getStatusClassNames(`${prefixCls}-textarea`, mergedStatus, hasFeedback), className, hashId),
      style: style,
      "data-count": dataCount
    }, textareaNode, hasFeedback && /*#__PURE__*/React.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon));
  }
  return wrapSSR(textareaNode);
});
export default TextArea;