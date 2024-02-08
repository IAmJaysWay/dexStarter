import type { MentionsProps as RcMentionsProps, MentionsRef as RcMentionsRef, DataDrivenOptionProps as MentionsOptionProps } from 'rc-mentions/lib/Mentions';
import * as React from 'react';
import type { InputStatus } from '../_util/statusUtils';
export declare const Option: React.FC<import("rc-mentions/lib/Option").OptionProps>;
export type MentionPlacement = 'top' | 'bottom';
export type { DataDrivenOptionProps as MentionsOptionProps } from 'rc-mentions/lib/Mentions';
export interface OptionProps {
    value: string;
    children: React.ReactNode;
    [key: string]: any;
}
export interface MentionProps extends RcMentionsProps {
    loading?: boolean;
    status?: InputStatus;
    options?: MentionsOptionProps[];
    popupClassName?: string;
}
export interface MentionsRef extends RcMentionsRef {
}
export interface MentionState {
    focused: boolean;
}
interface MentionsConfig {
    prefix?: string | string[];
    split?: string;
}
interface MentionsEntity {
    prefix: string;
    value: string;
}
type CompoundedComponent = React.ForwardRefExoticComponent<MentionProps & React.RefAttributes<MentionsRef>> & {
    Option: typeof Option;
    _InternalPanelDoNotUseOrYouWillBeFired: typeof PurePanel;
    getMentions: (value: string, config?: MentionsConfig) => MentionsEntity[];
};
declare const Mentions: CompoundedComponent;
declare const PurePanel: any;
export default Mentions;
