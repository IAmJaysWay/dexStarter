import type { ReactNode } from 'react';
import type { Gap } from './hooks/useTarget';
import type { TourStepInfo } from './TourStep';
import type { TourStepProps } from './TourStep';
import type { PlacementType } from './placements';
export interface TourProps {
    steps?: TourStepInfo[];
    open?: boolean;
    defaultCurrent?: number;
    current?: number;
    onChange?: (current: number) => void;
    onClose?: (current: number) => void;
    onFinish?: () => void;
    mask?: boolean;
    arrow?: boolean | {
        pointAtCenter: boolean;
    };
    rootClassName?: string;
    placement?: PlacementType;
    prefixCls?: string;
    renderPanel?: (props: TourStepProps, current: number) => ReactNode;
    gap?: Gap;
    animated?: boolean | {
        placeholder: boolean;
    };
}
declare const Tour: (props: TourProps) => JSX.Element;
export default Tour;
