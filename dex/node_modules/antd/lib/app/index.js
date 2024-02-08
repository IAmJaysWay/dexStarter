"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _configProvider = require("../config-provider");
var _style = _interopRequireDefault(require("./style"));
var _useMessage = _interopRequireDefault(require("../message/useMessage"));
var _useNotification = _interopRequireDefault(require("../notification/useNotification"));
var _useModal = _interopRequireDefault(require("../modal/useModal"));
var _context = _interopRequireDefault(require("./context"));
const useApp = () => _react.default.useContext(_context.default);
const App = props => {
  const {
    prefixCls: customizePrefixCls,
    children,
    className
  } = props;
  const {
    getPrefixCls
  } = (0, _react.useContext)(_configProvider.ConfigContext);
  const prefixCls = getPrefixCls('app', customizePrefixCls);
  const [wrapSSR, hashId] = (0, _style.default)(prefixCls);
  const customClassName = (0, _classnames.default)(hashId, prefixCls, className);
  const [messageApi, messageContextHolder] = (0, _useMessage.default)();
  const [notificationApi, notificationContextHolder] = (0, _useNotification.default)();
  const [ModalApi, ModalContextHolder] = (0, _useModal.default)();
  const memoizedContextValue = _react.default.useMemo(() => ({
    message: messageApi,
    notification: notificationApi,
    modal: ModalApi
  }), [messageApi, notificationApi, ModalApi]);
  return wrapSSR( /*#__PURE__*/_react.default.createElement(_context.default.Provider, {
    value: memoizedContextValue
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: customClassName
  }, ModalContextHolder, messageContextHolder, notificationContextHolder, children)));
};
if (process.env.NODE_ENV !== 'production') {
  App.displayName = 'App';
}
App.useApp = useApp;
var _default = App;
exports.default = _default;