"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _qrcode = require("qrcode.react");
var _classnames = _interopRequireDefault(require("classnames"));
var _icons = require("@ant-design/icons");
var _configProvider = require("../config-provider");
var _LocaleReceiver = _interopRequireDefault(require("../locale/LocaleReceiver"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _index = _interopRequireDefault(require("./style/index"));
var _spin = _interopRequireDefault(require("../spin"));
var _button = _interopRequireDefault(require("../button"));
var _theme = _interopRequireDefault(require("../theme"));
const {
  useToken
} = _theme.default;
const QRCode = props => {
  const {
    value,
    icon = '',
    size = 160,
    iconSize = 40,
    color = '#000',
    errorLevel = 'M',
    status = 'active',
    bordered = true,
    onRefresh,
    style,
    className,
    prefixCls: customizePrefixCls
  } = props;
  const {
    getPrefixCls
  } = (0, _react.useContext)(_configProvider.ConfigContext);
  const prefixCls = getPrefixCls('qrcode', customizePrefixCls);
  const [wrapSSR, hashId] = (0, _index.default)(prefixCls);
  const {
    token
  } = useToken();
  const qrCodeProps = (0, _react.useMemo)(() => {
    const imageSettings = {
      src: icon,
      x: undefined,
      y: undefined,
      height: iconSize,
      width: iconSize,
      excavate: true
    };
    return {
      value,
      size: size - (token.paddingSM + token.lineWidth) * 2,
      level: errorLevel,
      bgColor: 'transparent',
      fgColor: color,
      imageSettings: icon ? imageSettings : undefined
    };
  }, [errorLevel, color, icon, iconSize, size, value]);
  if (!value) {
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(false, 'QRCode', 'need to receive `value` props') : void 0;
    }
    return null;
  }
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? (0, _warning.default)(!(icon && errorLevel === 'L'), 'QRCode', 'ErrorLevel `L` is not recommended to be used with `icon`, for scanning result would be affected by low level.') : void 0;
  }
  const cls = (0, _classnames.default)(prefixCls, className, hashId, {
    [`${prefixCls}-borderless`]: !bordered
  });
  return wrapSSR( /*#__PURE__*/_react.default.createElement(_LocaleReceiver.default, {
    componentName: "QRCode"
  }, locale => /*#__PURE__*/_react.default.createElement("div", {
    style: Object.assign(Object.assign({}, style), {
      width: size,
      height: size
    }),
    className: cls
  }, status !== 'active' && /*#__PURE__*/_react.default.createElement("div", {
    className: `${prefixCls}-mask`
  }, status === 'loading' && /*#__PURE__*/_react.default.createElement(_spin.default, null), status === 'expired' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: `${prefixCls}-expired`
  }, locale.expired), typeof onRefresh === 'function' && /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "link",
    icon: /*#__PURE__*/_react.default.createElement(_icons.ReloadOutlined, null),
    onClick: onRefresh
  }, locale.refresh))), /*#__PURE__*/_react.default.createElement(_qrcode.QRCodeCanvas, Object.assign({}, qrCodeProps)))));
};
if (process.env.NODE_ENV !== 'production') {
  QRCode.displayName = 'QRCode';
}
var _default = QRCode;
exports.default = _default;