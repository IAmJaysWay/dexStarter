import type { TextAreaProps as RcTextAreaProps } from 'rc-textarea';
import type { ResizableTextAreaRef } from 'rc-textarea/lib/ResizableTextArea';
import * as React from 'react';
import type { SizeType } from '../config-provider/SizeContext';
import type { InputStatus } from '../_util/statusUtils';
import type { InputFocusOptions } from './Input';
interface ShowCountProps {
    formatter: (args: {
        value: string;
        count: number;
        maxLength?: number;
    }) => string;
}
export interface TextAreaProps extends RcTextAreaProps {
    allowClear?: boolean;
    bordered?: boolean;
    showCount?: boolean | ShowCountProps;
    size?: SizeType;
    disabled?: boolean;
    status?: InputStatus;
}
export interface TextAreaRef {
    focus: (options?: InputFocusOptions) => void;
    blur: () => void;
    resizableTextArea?: ResizableTextAreaRef;
}
declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<TextAreaRef>>;
export default TextArea;
