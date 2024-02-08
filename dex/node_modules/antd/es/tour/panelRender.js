import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import classNames from 'classnames';
import CloseOutlined from "@ant-design/icons/es/icons/CloseOutlined";
import LocaleReceiver from '../locale/LocaleReceiver';
import Button from '../button';
import defaultLocale from '../locale/en_US';
const panelRender = (props, current, type) => {
  const {
    prefixCls,
    total = 1,
    title,
    onClose,
    onPrev,
    onNext,
    onFinish,
    cover,
    description,
    nextButtonProps,
    prevButtonProps,
    stepRender,
    type: stepType,
    arrow,
    className
  } = props;
  const mergedType = typeof stepType !== 'undefined' ? stepType : type;
  const isLastStep = current === total - 1;
  const prevBtnClick = () => {
    onPrev === null || onPrev === void 0 ? void 0 : onPrev();
    if (typeof (prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.onClick) === 'function') {
      prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.onClick();
    }
  };
  const nextBtnClick = () => {
    if (isLastStep) {
      onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    } else {
      onNext === null || onNext === void 0 ? void 0 : onNext();
    }
    if (typeof (nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.onClick) === 'function') {
      nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.onClick();
    }
  };
  let headerNode;
  if (title) {
    headerNode = /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-header`
    }, /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-title`
    }, title));
  }
  let descriptionNode;
  if (description) {
    descriptionNode = /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-description`
    }, description);
  }
  let coverNode;
  if (cover) {
    coverNode = /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-cover`
    }, cover);
  }
  const mergedSlickNode = typeof stepRender === 'function' && stepRender(current, total) || _toConsumableArray(Array.from({
    length: total
  }).keys()).map((stepItem, index) => /*#__PURE__*/React.createElement("span", {
    key: stepItem,
    className: classNames(index === current && `${prefixCls}-slider-active`, `${prefixCls}-slider`)
  }));
  const slickNode = total > 1 ? mergedSlickNode : null;
  const mainBtnType = mergedType === 'primary' ? 'default' : 'primary';
  const secondaryBtnProps = {
    type: 'default',
    ghost: mergedType === 'primary'
  };
  return /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Tour",
    defaultLocale: defaultLocale.Tour
  }, contextLocale => {
    var _a, _b;
    return /*#__PURE__*/React.createElement("div", {
      className: classNames(mergedType === 'primary' ? `${prefixCls}-primary` : '', className, `${prefixCls}-content`)
    }, arrow && /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-arrow`,
      key: "arrow"
    }), /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-inner`
    }, /*#__PURE__*/React.createElement(CloseOutlined, {
      className: `${prefixCls}-close`,
      onClick: onClose
    }), coverNode, headerNode, descriptionNode, /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-footer`
    }, /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-sliders`
    }, slickNode), /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-buttons`
    }, current !== 0 ? /*#__PURE__*/React.createElement(Button, Object.assign({}, secondaryBtnProps, prevButtonProps, {
      onClick: prevBtnClick,
      size: "small",
      className: classNames(`${prefixCls}-prev-btn`, prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.className)
    }), (_a = prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.children) !== null && _a !== void 0 ? _a : contextLocale.Previous) : null, /*#__PURE__*/React.createElement(Button, Object.assign({
      type: mainBtnType
    }, nextButtonProps, {
      onClick: nextBtnClick,
      size: "small",
      className: classNames(`${prefixCls}-next-btn`, nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.className)
    }), (_b = nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.children) !== null && _b !== void 0 ? _b : isLastStep ? contextLocale.Finish : contextLocale.Next)))));
  });
};
export default panelRender;