import * as React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';
export interface Route {
    path: string;
    breadcrumbName: string;
    children?: Omit<Route, 'children'>[];
}
export interface BreadcrumbProps {
    prefixCls?: string;
    routes?: Route[];
    params?: any;
    separator?: React.ReactNode;
    itemRender?: (route: Route, params: any, routes: Array<Route>, paths: Array<string>) => React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
type CompoundedComponent = React.FC<BreadcrumbProps> & {
    Item: typeof BreadcrumbItem;
    Separator: typeof BreadcrumbSeparator;
};
declare const Breadcrumb: CompoundedComponent;
export default Breadcrumb;
