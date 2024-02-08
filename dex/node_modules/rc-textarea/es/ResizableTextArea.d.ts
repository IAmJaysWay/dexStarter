import * as React from 'react';
import type { TextAreaProps } from '.';
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
export interface ResizableTextAreaRef {
    textArea: HTMLTextAreaElement;
}
declare const ResizableTextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<ResizableTextAreaRef>>;
export default ResizableTextArea;
