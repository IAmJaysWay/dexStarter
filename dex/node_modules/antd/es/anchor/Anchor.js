import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import classNames from 'classnames';
import * as React from 'react';
import Affix from '../affix';
import { ConfigContext } from '../config-provider';
import getScroll from '../_util/getScroll';
import scrollTo from '../_util/scrollTo';
import warning from '../_util/warning';
import AnchorContext from './context';
import AnchorLink from './AnchorLink';
import useStyle from './style';
function getDefaultContainer() {
  return window;
}
function getOffsetTop(element, container) {
  if (!element.getClientRects().length) {
    return 0;
  }
  const rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    if (container === window) {
      container = element.ownerDocument.documentElement;
      return rect.top - container.clientTop;
    }
    return rect.top - container.getBoundingClientRect().top;
  }
  return rect.top;
}
const sharpMatcherRegx = /#([\S ]+)$/;
const AnchorContent = props => {
  var _a;
  const {
    rootClassName,
    anchorPrefixCls: prefixCls,
    className = '',
    style,
    offsetTop,
    affix = true,
    showInkInFixed = false,
    children,
    items,
    bounds,
    targetOffset,
    onClick,
    onChange,
    getContainer,
    getCurrentAnchor
  } = props;
  // =================== Warning =====================
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? warning(!children, 'Anchor', '`Anchor children` is deprecated. Please use `items` instead.') : void 0;
  }
  const [links, setLinks] = React.useState([]);
  const [activeLink, setActiveLink] = React.useState(null);
  const activeLinkRef = React.useRef(activeLink);
  const wrapperRef = React.useRef(null);
  const spanLinkNode = React.useRef(null);
  const animating = React.useRef(false);
  const {
    direction,
    getTargetContainer
  } = React.useContext(ConfigContext);
  const getCurrentContainer = (_a = getContainer !== null && getContainer !== void 0 ? getContainer : getTargetContainer) !== null && _a !== void 0 ? _a : getDefaultContainer;
  const dependencyListItem = JSON.stringify(links);
  const registerLink = React.useCallback(link => {
    if (!links.includes(link)) {
      setLinks(prev => [].concat(_toConsumableArray(prev), [link]));
    }
  }, [dependencyListItem]);
  const unregisterLink = React.useCallback(link => {
    if (links.includes(link)) {
      setLinks(prev => prev.filter(i => i !== link));
    }
  }, [dependencyListItem]);
  const updateInk = () => {
    var _a;
    const linkNode = (_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(`.${prefixCls}-link-title-active`);
    if (linkNode && spanLinkNode.current) {
      spanLinkNode.current.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2}px`;
      spanLinkNode.current.style.height = `${linkNode.clientHeight}px`;
    }
  };
  const getInternalCurrentAnchor = function (_links) {
    let _offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let _bounds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
    const linkSections = [];
    const container = getCurrentContainer();
    _links.forEach(link => {
      const sharpLinkMatch = sharpMatcherRegx.exec(link === null || link === void 0 ? void 0 : link.toString());
      if (!sharpLinkMatch) {
        return;
      }
      const target = document.getElementById(sharpLinkMatch[1]);
      if (target) {
        const top = getOffsetTop(target, container);
        if (top < _offsetTop + _bounds) {
          linkSections.push({
            link,
            top
          });
        }
      }
    });
    if (linkSections.length) {
      const maxSection = linkSections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
      return maxSection.link;
    }
    return '';
  };
  const setCurrentActiveLink = link => {
    if (activeLinkRef.current === link) {
      return;
    }
    // https://github.com/ant-design/ant-design/issues/30584
    const newLink = typeof getCurrentAnchor === 'function' ? getCurrentAnchor(link) : link;
    setActiveLink(newLink);
    activeLinkRef.current = newLink;
    // onChange should respect the original link (which may caused by
    // window scroll or user click), not the new link
    onChange === null || onChange === void 0 ? void 0 : onChange(link);
  };
  const handleScroll = React.useCallback(() => {
    if (animating.current) {
      return;
    }
    if (typeof getCurrentAnchor === 'function') {
      return;
    }
    const currentActiveLink = getInternalCurrentAnchor(links, targetOffset !== undefined ? targetOffset : offsetTop || 0, bounds);
    setCurrentActiveLink(currentActiveLink);
  }, [dependencyListItem, targetOffset, offsetTop]);
  const handleScrollTo = React.useCallback(link => {
    setCurrentActiveLink(link);
    const container = getCurrentContainer();
    const scrollTop = getScroll(container, true);
    const sharpLinkMatch = sharpMatcherRegx.exec(link);
    if (!sharpLinkMatch) {
      return;
    }
    const targetElement = document.getElementById(sharpLinkMatch[1]);
    if (!targetElement) {
      return;
    }
    const eleOffsetTop = getOffsetTop(targetElement, container);
    let y = scrollTop + eleOffsetTop;
    y -= targetOffset !== undefined ? targetOffset : offsetTop || 0;
    animating.current = true;
    scrollTo(y, {
      getContainer: getCurrentContainer,
      callback() {
        animating.current = false;
      }
    });
  }, [targetOffset, offsetTop]);
  const inkClass = classNames({
    [`${prefixCls}-ink-ball-visible`]: activeLink
  }, `${prefixCls}-ink-ball`);
  const wrapperClass = classNames(rootClassName, `${prefixCls}-wrapper`, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className);
  const anchorClass = classNames(prefixCls, {
    [`${prefixCls}-fixed`]: !affix && !showInkInFixed
  });
  const wrapperStyle = Object.assign({
    maxHeight: offsetTop ? `calc(100vh - ${offsetTop}px)` : '100vh'
  }, style);
  const createNestedLink = options => Array.isArray(options) ? options.map(item => /*#__PURE__*/React.createElement(AnchorLink, Object.assign({}, item, {
    key: item.key
  }), createNestedLink(item.children))) : null;
  const anchorContent = /*#__PURE__*/React.createElement("div", {
    ref: wrapperRef,
    className: wrapperClass,
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: anchorClass
  }, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-ink`
  }, /*#__PURE__*/React.createElement("span", {
    className: inkClass,
    ref: spanLinkNode
  })), 'items' in props ? createNestedLink(items) : children));
  React.useEffect(() => {
    const scrollContainer = getCurrentContainer();
    handleScroll();
    scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [dependencyListItem]);
  React.useEffect(() => {
    if (typeof getCurrentAnchor === 'function') {
      setCurrentActiveLink(getCurrentAnchor(activeLinkRef.current || ''));
    }
  }, [getCurrentAnchor]);
  React.useEffect(() => {
    updateInk();
  }, [getCurrentAnchor, dependencyListItem, activeLink]);
  const memoizedContextValue = React.useMemo(() => ({
    registerLink,
    unregisterLink,
    scrollTo: handleScrollTo,
    activeLink,
    onClick
  }), [activeLink, onClick, handleScrollTo]);
  return /*#__PURE__*/React.createElement(AnchorContext.Provider, {
    value: memoizedContextValue
  }, affix ? /*#__PURE__*/React.createElement(Affix, {
    offsetTop: offsetTop,
    target: getCurrentContainer
  }, anchorContent) : anchorContent);
};
const Anchor = props => {
  const {
    prefixCls: customizePrefixCls
  } = props;
  const {
    getPrefixCls
  } = React.useContext(ConfigContext);
  const anchorPrefixCls = getPrefixCls('anchor', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(anchorPrefixCls);
  return wrapSSR( /*#__PURE__*/React.createElement(AnchorContent, Object.assign({}, props, {
    rootClassName: hashId,
    anchorPrefixCls: anchorPrefixCls
  })));
};
if (process.env.NODE_ENV !== 'production') {
  Anchor.displayName = 'Anchor';
}
export default Anchor;