import * as React from 'react';
import type { DropdownProps } from '../dropdown/dropdown';
export interface BreadcrumbItemProps {
    prefixCls?: string;
    separator?: React.ReactNode;
    href?: string;
    menu?: DropdownProps['menu'];
    dropdownProps?: DropdownProps;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
    className?: string;
    children?: React.ReactNode;
    /** @deprecated Please use `menu` instead */
    overlay?: DropdownProps['overlay'];
}
type CompoundedComponent = React.FC<BreadcrumbItemProps> & {
    __ANT_BREADCRUMB_ITEM: boolean;
};
declare const BreadcrumbItem: CompoundedComponent;
export default BreadcrumbItem;
