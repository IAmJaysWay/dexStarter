import * as React from 'react';
import type { Direction, Placement, DataDrivenOptionProps } from './Mentions';
interface KeywordTriggerProps {
    loading?: boolean;
    options: DataDrivenOptionProps[];
    prefixCls?: string;
    placement?: Placement;
    direction?: Direction;
    visible?: boolean;
    transitionName?: string;
    children?: React.ReactElement;
    getPopupContainer?: () => HTMLElement;
    dropdownClassName?: string;
}
declare class KeywordTrigger extends React.Component<KeywordTriggerProps, {}> {
    getDropdownPrefix: () => string;
    getDropdownElement: () => JSX.Element;
    getDropDownPlacement: () => any;
    render(): JSX.Element;
}
export default KeywordTrigger;
