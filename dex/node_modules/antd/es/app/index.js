import React, { useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';
import useStyle from './style';
import useMessage from '../message/useMessage';
import useNotification from '../notification/useNotification';
import useModal from '../modal/useModal';
import AppContext from './context';
const useApp = () => React.useContext(AppContext);
const App = props => {
  const {
    prefixCls: customizePrefixCls,
    children,
    className
  } = props;
  const {
    getPrefixCls
  } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('app', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const customClassName = classNames(hashId, prefixCls, className);
  const [messageApi, messageContextHolder] = useMessage();
  const [notificationApi, notificationContextHolder] = useNotification();
  const [ModalApi, ModalContextHolder] = useModal();
  const memoizedContextValue = React.useMemo(() => ({
    message: messageApi,
    notification: notificationApi,
    modal: ModalApi
  }), [messageApi, notificationApi, ModalApi]);
  return wrapSSR( /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: memoizedContextValue
  }, /*#__PURE__*/React.createElement("div", {
    className: customClassName
  }, ModalContextHolder, messageContextHolder, notificationContextHolder, children)));
};
if (process.env.NODE_ENV !== 'production') {
  App.displayName = 'App';
}
App.useApp = useApp;
export default App;