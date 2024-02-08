"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CloseOutlined = _interopRequireDefault(require("@ant-design/icons/CloseOutlined"));
var _LocaleReceiver = _interopRequireDefault(require("../locale/LocaleReceiver"));
var _button = _interopRequireDefault(require("../button"));
var _en_US = _interopRequireDefault(require("../locale/en_US"));
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
    headerNode = /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-header`
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-title`
    }, title));
  }
  let descriptionNode;
  if (description) {
    descriptionNode = /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-description`
    }, description);
  }
  let coverNode;
  if (cover) {
    coverNode = /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-cover`
    }, cover);
  }
  const mergedSlickNode = typeof stepRender === 'function' && stepRender(current, total) || (0, _toConsumableArray2.default)(Array.from({
    length: total
  }).keys()).map((stepItem, index) => /*#__PURE__*/_react.default.createElement("span", {
    key: stepItem,
    className: (0, _classnames.default)(index === current && `${prefixCls}-slider-active`, `${prefixCls}-slider`)
  }));
  const slickNode = total > 1 ? mergedSlickNode : null;
  const mainBtnType = mergedType === 'primary' ? 'default' : 'primary';
  const secondaryBtnProps = {
    type: 'default',
    ghost: mergedType === 'primary'
  };
  return /*#__PURE__*/_react.default.createElement(_LocaleReceiver.default, {
    componentName: "Tour",
    defaultLocale: _en_US.default.Tour
  }, contextLocale => {
    var _a, _b;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(mergedType === 'primary' ? `${prefixCls}-primary` : '', className, `${prefixCls}-content`)
    }, arrow && /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-arrow`,
      key: "arrow"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-inner`
    }, /*#__PURE__*/_react.default.createElement(_CloseOutlined.default, {
      className: `${prefixCls}-close`,
      onClick: onClose
    }), coverNode, headerNode, descriptionNode, /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-footer`
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-sliders`
    }, slickNode), /*#__PURE__*/_react.default.createElement("div", {
      className: `${prefixCls}-buttons`
    }, current !== 0 ? /*#__PURE__*/_react.default.createElement(_button.default, Object.assign({}, secondaryBtnProps, prevButtonProps, {
      onClick: prevBtnClick,
      size: "small",
      className: (0, _classnames.default)(`${prefixCls}-prev-btn`, prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.className)
    }), (_a = prevButtonProps === null || prevButtonProps === void 0 ? void 0 : prevButtonProps.children) !== null && _a !== void 0 ? _a : contextLocale.Previous) : null, /*#__PURE__*/_react.default.createElement(_button.default, Object.assign({
      type: mainBtnType
    }, nextButtonProps, {
      onClick: nextBtnClick,
      size: "small",
      className: (0, _classnames.default)(`${prefixCls}-next-btn`, nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.className)
    }), (_b = nextButtonProps === null || nextButtonProps === void 0 ? void 0 : nextButtonProps.children) !== null && _b !== void 0 ? _b : isLastStep ? contextLocale.Finish : contextLocale.Next)))));
  });
};
var _default = panelRender;
exports.default = _default;