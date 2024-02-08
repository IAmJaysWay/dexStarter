import type { BasicDataNode, TreeProps as RcTreeProps } from 'rc-tree';
import RcTree from 'rc-tree';
import type { DataNode, Key } from 'rc-tree/lib/interface';
import type { Component } from 'react';
import React from 'react';
export type SwitcherIcon = React.ReactNode | ((props: AntTreeNodeProps) => React.ReactNode);
export type TreeLeafIcon = React.ReactNode | ((props: AntTreeNodeProps) => React.ReactNode);
export interface AntdTreeNodeAttribute {
    eventKey: string;
    prefixCls: string;
    className: string;
    expanded: boolean;
    selected: boolean;
    checked: boolean;
    halfChecked: boolean;
    children: React.ReactNode;
    title: React.ReactNode;
    pos: string;
    dragOver: boolean;
    dragOverGapTop: boolean;
    dragOverGapBottom: boolean;
    isLeaf: boolean;
    selectable: boolean;
    disabled: boolean;
    disableCheckbox: boolean;
}
export interface AntTreeNodeProps {
    className?: string;
    checkable?: boolean;
    disabled?: boolean;
    disableCheckbox?: boolean;
    title?: string | React.ReactNode;
    key?: Key;
    eventKey?: string;
    isLeaf?: boolean;
    checked?: boolean;
    expanded?: boolean;
    loading?: boolean;
    selected?: boolean;
    selectable?: boolean;
    icon?: ((treeNode: AntdTreeNodeAttribute) => React.ReactNode) | React.ReactNode;
    children?: React.ReactNode;
    [customProp: string]: any;
}
export interface AntTreeNode extends Component<AntTreeNodeProps, {}> {
}
export interface AntTreeNodeBaseEvent {
    node: AntTreeNode;
    nativeEvent: MouseEvent;
}
export interface AntTreeNodeCheckedEvent extends AntTreeNodeBaseEvent {
    event: 'check';
    checked?: boolean;
    checkedNodes?: AntTreeNode[];
}
export interface AntTreeNodeSelectedEvent extends AntTreeNodeBaseEvent {
    event: 'select';
    selected?: boolean;
    selectedNodes?: DataNode[];
}
export interface AntTreeNodeExpandedEvent extends AntTreeNodeBaseEvent {
    expanded?: boolean;
}
export interface AntTreeNodeMouseEvent {
    node: AntTreeNode;
    event: React.DragEvent<HTMLElement>;
}
export interface AntTreeNodeDragEnterEvent extends AntTreeNodeMouseEvent {
    expandedKeys: Key[];
}
export interface AntTreeNodeDropEvent {
    node: AntTreeNode;
    dragNode: AntTreeNode;
    dragNodesKeys: Key[];
    dropPosition: number;
    dropToGap?: boolean;
    event: React.MouseEvent<HTMLElement>;
}
export type TreeNodeNormal = DataNode;
type DraggableFn = (node: DataNode) => boolean;
interface DraggableConfig {
    icon?: React.ReactNode | false;
    nodeDraggable?: DraggableFn;
}
export interface TreeProps<T extends BasicDataNode = DataNode> extends Omit<RcTreeProps<T>, 'prefixCls' | 'showLine' | 'direction' | 'draggable' | 'icon' | 'switcherIcon'> {
    showLine?: boolean | {
        showLeafIcon: boolean | TreeLeafIcon;
    };
    className?: string;
    /** 是否支持多选 */
    multiple?: boolean;
    /** 是否自动展开父节点 */
    autoExpandParent?: boolean;
    /** Checkable状态下节点选择完全受控（父子节点选中状态不再关联） */
    checkStrictly?: boolean;
    /** 是否支持选中 */
    checkable?: boolean;
    /** 是否禁用树 */
    disabled?: boolean;
    /** 默认展开所有树节点 */
    defaultExpandAll?: boolean;
    /** 默认展开对应树节点 */
    defaultExpandParent?: boolean;
    /** 默认展开指定的树节点 */
    defaultExpandedKeys?: Key[];
    /** （受控）展开指定的树节点 */
    expandedKeys?: Key[];
    /** （受控）选中复选框的树节点 */
    checkedKeys?: Key[] | {
        checked: Key[];
        halfChecked: Key[];
    };
    /** 默认选中复选框的树节点 */
    defaultCheckedKeys?: Key[];
    /** （受控）设置选中的树节点 */
    selectedKeys?: Key[];
    /** 默认选中的树节点 */
    defaultSelectedKeys?: Key[];
    selectable?: boolean;
    /** 点击树节点触发 */
    filterAntTreeNode?: (node: AntTreeNode) => boolean;
    loadedKeys?: Key[];
    /** 设置节点可拖拽（IE>8） */
    draggable?: DraggableFn | boolean | DraggableConfig;
    style?: React.CSSProperties;
    showIcon?: boolean;
    icon?: ((nodeProps: AntdTreeNodeAttribute) => React.ReactNode) | React.ReactNode | RcTreeProps<T>['icon'];
    switcherIcon?: SwitcherIcon | RcTreeProps<T>['switcherIcon'];
    prefixCls?: string;
    children?: React.ReactNode;
    blockNode?: boolean;
}
declare const Tree: React.ForwardRefExoticComponent<TreeProps<DataNode> & React.RefAttributes<RcTree<DataNode>>>;
export default Tree;
