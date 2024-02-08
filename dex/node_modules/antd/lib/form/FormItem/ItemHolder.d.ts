import * as React from 'react';
import type { Meta } from 'rc-field-form/lib/interface';
import type { ReportMetaChange } from '../context';
import type { FormItemProps } from '.';
export interface ItemHolderProps extends FormItemProps {
    prefixCls: string;
    className?: string;
    style?: React.CSSProperties;
    errors: React.ReactNode[];
    warnings: React.ReactNode[];
    meta: Meta;
    children?: React.ReactNode;
    fieldId?: string;
    isRequired?: boolean;
    onSubItemMetaChange: ReportMetaChange;
}
export default function ItemHolder(props: ItemHolderProps): JSX.Element;
