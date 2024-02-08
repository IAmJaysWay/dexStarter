import * as React from 'react';
import type { ArgsProps, ConfigOptions, MessageType, NoticeType, TypeOpen } from './interface';
import PurePanel from './PurePanel';
import useMessage from './useMessage';
export { ArgsProps };
declare const methods: NoticeType[];
type MethodType = typeof methods[number];
declare function setMessageGlobalConfig(config: ConfigOptions): void;
declare const baseStaticMethods: {
    open: (config: ArgsProps) => MessageType;
    destroy: (key?: React.Key) => void;
    config: typeof setMessageGlobalConfig;
    useMessage: typeof useMessage;
    /** @private Internal Component. Do not use in your production. */
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
};
declare const staticMethods: typeof baseStaticMethods & Record<MethodType, TypeOpen>;
/** @private Only Work in test env */
export declare let actWrapper: (wrapper: any) => void;
/** @private Only Work in test env */
export declare let actDestroy: () => void;
export default staticMethods;
