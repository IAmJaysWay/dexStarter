import * as React from 'react';
import type { ArgsProps } from './interface';
import PurePanel from './PurePanel';
import useNotification from './useNotification';
declare const methods: readonly ["success", "info", "warning", "error"];
type MethodType = typeof methods[number];
declare const baseStaticMethods: {
    open: (config: ArgsProps) => void;
    destroy: (key?: React.Key) => void;
    config: any;
    useNotification: typeof useNotification;
    /** @private Internal Component. Do not use in your production. */
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};
declare const staticMethods: typeof baseStaticMethods & Record<MethodType, (config: ArgsProps) => void>;
/** @private Only Work in test env */
export declare let actWrapper: (wrapper: any) => void;
export default staticMethods;
