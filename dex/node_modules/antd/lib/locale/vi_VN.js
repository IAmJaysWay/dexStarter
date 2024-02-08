"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vi_VN = _interopRequireDefault(require("rc-pagination/lib/locale/vi_VN"));
var _vi_VN2 = _interopRequireDefault(require("../calendar/locale/vi_VN"));
var _vi_VN3 = _interopRequireDefault(require("../date-picker/locale/vi_VN"));
var _vi_VN4 = _interopRequireDefault(require("../time-picker/locale/vi_VN"));
const localeValues = {
  locale: 'vi',
  Pagination: _vi_VN.default,
  DatePicker: _vi_VN3.default,
  TimePicker: _vi_VN4.default,
  Calendar: _vi_VN2.default,
  Table: {
    filterTitle: 'Bộ lọc',
    filterConfirm: 'Đồng ý',
    filterReset: 'Bỏ lọc',
    selectAll: 'Chọn tất cả',
    selectInvert: 'Chọn ngược lại'
  },
  Modal: {
    okText: 'Đồng ý',
    cancelText: 'Hủy',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'Đồng ý',
    cancelText: 'Hủy'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Tìm ở đây',
    itemUnit: 'mục',
    itemsUnit: 'mục'
  },
  Upload: {
    uploading: 'Đang tải lên...',
    removeFile: 'Gỡ bỏ tập tin',
    uploadError: 'Lỗi tải lên',
    previewFile: 'Xem trước tập tin',
    downloadFile: 'Tải tập tin'
  },
  Empty: {
    description: 'Trống'
  }
};
var _default = localeValues;
exports.default = _default;