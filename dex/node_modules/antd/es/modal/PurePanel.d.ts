import type { PanelProps } from 'rc-dialog/lib/Dialog/Content/Panel';
import * as React from 'react';
import type { ModalProps, ModalFuncProps } from './Modal';
export interface PurePanelProps extends Omit<PanelProps, 'prefixCls'>, Pick<ModalFuncProps, 'type'> {
    prefixCls?: string;
    style?: React.CSSProperties;
}
export declare function renderCloseIcon(prefixCls: string, closeIcon?: React.ReactNode): JSX.Element;
export declare function renderFooter(props: Pick<ModalProps, 'footer' | 'okText' | 'okType' | 'cancelText' | 'confirmLoading' | 'okButtonProps' | 'cancelButtonProps'> & {
    onOk?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    onCancel?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}): string | number | boolean | React.ReactFragment | JSX.Element | null;
export default function PurePanel(props: PurePanelProps): JSX.Element;
