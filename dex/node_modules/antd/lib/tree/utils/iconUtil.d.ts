import * as React from 'react';
import type { AntTreeNodeProps, TreeLeafIcon, SwitcherIcon } from '../Tree';
export default function renderSwitcherIcon(prefixCls: string, switcherIcon: SwitcherIcon, showLine: boolean | {
    showLeafIcon: boolean | TreeLeafIcon;
} | undefined, treeNodeProps: AntTreeNodeProps): React.ReactNode;
