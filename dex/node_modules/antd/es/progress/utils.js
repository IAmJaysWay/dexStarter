import { presetPrimaryColors } from '@ant-design/colors';
import warning from '../_util/warning';
export function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}
export function getSuccessPercent(_ref) {
  let {
    success,
    successPercent
  } = _ref;
  let percent = successPercent;
  /** @deprecated Use `percent` instead */
  if (success && 'progress' in success) {
    process.env.NODE_ENV !== "production" ? warning(false, 'Progress', '`success.progress` is deprecated. Please use `success.percent` instead.') : void 0;
    percent = success.progress;
  }
  if (success && 'percent' in success) {
    percent = success.percent;
  }
  return percent;
}
export const getPercentage = _ref2 => {
  let {
    percent,
    success,
    successPercent
  } = _ref2;
  const realSuccessPercent = validProgress(getSuccessPercent({
    success,
    successPercent
  }));
  return [realSuccessPercent, validProgress(validProgress(percent) - realSuccessPercent)];
};
export const getStrokeColor = _ref3 => {
  let {
    success = {},
    strokeColor
  } = _ref3;
  const {
    strokeColor: successColor
  } = success;
  return [successColor || presetPrimaryColors.green, strokeColor || null];
};