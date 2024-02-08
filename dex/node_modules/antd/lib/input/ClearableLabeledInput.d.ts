import * as React from 'react';
import type { DirectionType } from '../config-provider';
import type { SizeType } from '../config-provider/SizeContext';
import type { FormItemStatusContextProps } from '../form/context';
import type { InputStatus } from '../_util/statusUtils';
declare const ClearableInputType: readonly ["text", "input"];
/** This basic props required for input and textarea. */
interface BasicProps {
    prefixCls: string;
    inputType: typeof ClearableInputType[number];
    value?: any;
    allowClear?: boolean;
    element: React.ReactElement;
    handleReset: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    direction?: DirectionType;
    focused?: boolean;
    readOnly?: boolean;
    bordered: boolean;
    hidden?: boolean;
}
/** This props only for input. */
export interface ClearableInputProps extends BasicProps {
    size?: SizeType;
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    triggerFocus?: () => void;
    status?: InputStatus;
    hashId?: string;
}
declare class ClearableLabeledInput extends React.Component<ClearableInputProps> {
    renderClearIcon(prefixCls: string): JSX.Element;
    renderTextAreaWithClearIcon(prefixCls: string, element: React.ReactElement, statusContext: FormItemStatusContextProps): JSX.Element;
    render(): JSX.Element;
}
export default ClearableLabeledInput;
