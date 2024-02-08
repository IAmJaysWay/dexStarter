"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;
var _LocaleReceiver = _interopRequireWildcard(require("../locale/LocaleReceiver"));
Object.keys(_LocaleReceiver).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _LocaleReceiver[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _LocaleReceiver[key];
    }
  });
});
// locale-provider 文件夹的移除需要修改 @ant-design/tools 和 antd-img-crop
var _default = _LocaleReceiver.default;
exports.default = _default;