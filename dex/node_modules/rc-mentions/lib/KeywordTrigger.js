"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _rcTrigger = _interopRequireDefault(require("rc-trigger"));
var React = _interopRequireWildcard(require("react"));
var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BUILT_IN_PLACEMENTS = {
  bottomRight: {
    points: ['tl', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomLeft: {
    points: ['tr', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topRight: {
    points: ['bl', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['br', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  }
};
var KeywordTrigger = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(KeywordTrigger, _React$Component);
  var _super = (0, _createSuper2.default)(KeywordTrigger);
  function KeywordTrigger() {
    var _this;
    (0, _classCallCheck2.default)(this, KeywordTrigger);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.getDropdownPrefix = function () {
      return "".concat(_this.props.prefixCls, "-dropdown");
    };
    _this.getDropdownElement = function () {
      var options = _this.props.options;
      return /*#__PURE__*/React.createElement(_DropdownMenu.default, {
        prefixCls: _this.getDropdownPrefix(),
        options: options
      });
    };
    _this.getDropDownPlacement = function () {
      var _this$props = _this.props,
        placement = _this$props.placement,
        direction = _this$props.direction;
      var popupPlacement;
      if (direction === 'rtl') {
        popupPlacement = placement === 'top' ? 'topLeft' : 'bottomLeft';
      } else {
        popupPlacement = placement === 'top' ? 'topRight' : 'bottomRight';
      }
      return popupPlacement;
    };
    return _this;
  }
  (0, _createClass2.default)(KeywordTrigger, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        visible = _this$props2.visible,
        transitionName = _this$props2.transitionName,
        getPopupContainer = _this$props2.getPopupContainer;
      var popupElement = this.getDropdownElement();
      return /*#__PURE__*/React.createElement(_rcTrigger.default, {
        prefixCls: this.getDropdownPrefix(),
        popupVisible: visible,
        popup: popupElement,
        popupPlacement: this.getDropDownPlacement(),
        popupTransitionName: transitionName,
        builtinPlacements: BUILT_IN_PLACEMENTS,
        getPopupContainer: getPopupContainer,
        popupClassName: this.props.dropdownClassName
      }, children);
    }
  }]);
  return KeywordTrigger;
}(React.Component);
var _default = KeywordTrigger;
exports.default = _default;