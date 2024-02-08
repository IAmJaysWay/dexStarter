import * as React from 'react';
import type { CollapsibleType } from './CollapsePanel';
import CollapsePanel from './CollapsePanel';
/** @deprecated Please use `start` | `end` instead */
type ExpandIconPositionLegacy = 'left' | 'right';
export type ExpandIconPosition = 'start' | 'end' | ExpandIconPositionLegacy | undefined;
export interface CollapseProps {
    activeKey?: Array<string | number> | string | number;
    defaultActiveKey?: Array<string | number> | string | number;
    /** 手风琴效果 */
    accordion?: boolean;
    destroyInactivePanel?: boolean;
    onChange?: (key: string | string[]) => void;
    style?: React.CSSProperties;
    className?: string;
    bordered?: boolean;
    prefixCls?: string;
    expandIcon?: (panelProps: PanelProps) => React.ReactNode;
    expandIconPosition?: ExpandIconPosition;
    ghost?: boolean;
    collapsible?: CollapsibleType;
    children?: React.ReactNode;
}
interface PanelProps {
    isActive?: boolean;
    header?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    showArrow?: boolean;
    forceRender?: boolean;
    /** @deprecated Use `collapsible="disabled"` instead */
    disabled?: boolean;
    extra?: React.ReactNode;
    collapsible?: CollapsibleType;
}
type CompoundedComponent = React.FC<CollapseProps> & {
    Panel: typeof CollapsePanel;
};
declare const Collapse: CompoundedComponent;
export default Collapse;
