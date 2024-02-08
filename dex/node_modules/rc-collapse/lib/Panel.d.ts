import * as React from 'react';
import type { CollapsePanelProps } from './interface';
declare class CollapsePanel extends React.Component<CollapsePanelProps, any> {
    static defaultProps: {
        showArrow: boolean;
        isActive: boolean;
        onItemClick(): void;
        headerClass: string;
        forceRender: boolean;
    };
    shouldComponentUpdate(nextProps: CollapsePanelProps): boolean;
    onItemClick: () => void;
    handleKeyPress: (e: React.KeyboardEvent) => void;
    renderIcon: () => JSX.Element;
    renderTitle: () => JSX.Element;
    render(): JSX.Element;
}
export default CollapsePanel;
