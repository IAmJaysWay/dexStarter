/// <reference types="react" />
import type { PosInfo } from './hooks/useTarget';
export interface MaskProps {
    prefixCls?: string;
    pos: PosInfo;
    rootClassName?: string;
    mask?: boolean;
    open?: boolean;
    animated?: boolean | {
        placeholder: boolean;
    };
}
declare const Mask: (props: MaskProps) => JSX.Element;
export default Mask;
