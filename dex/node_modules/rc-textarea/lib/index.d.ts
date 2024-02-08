import * as React from 'react';
import ResizableTextArea from './ResizableTextArea';
import type { ResizableTextAreaRef } from './ResizableTextArea';
import type { AutoSizeType } from './ResizableTextArea';
export type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface TextAreaProps extends Omit<HTMLTextareaProps, 'onResize'> {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    autoSize?: boolean | AutoSizeType;
    onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onResize?: (size: {
        width: number;
        height: number;
    }) => void;
}
export interface TextAreaState {
    value: any;
}
declare class TextArea extends React.Component<TextAreaProps, TextAreaState> {
    resizableTextArea: ResizableTextAreaRef;
    constructor(props: TextAreaProps);
    static getDerivedStateFromProps(nextProps: TextAreaProps): {
        value: string | number | readonly string[];
    };
    setValue(value: string, callback?: () => void): void;
    focus: () => void;
    blur(): void;
    saveTextArea: (resizableTextArea: ResizableTextAreaRef) => void;
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}
export { ResizableTextArea };
export type { AutoSizeType };
export default TextArea;
