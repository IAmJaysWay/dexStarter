import type { ReactNode } from 'react';
import type { TourProps as RCTourProps, TourStepProps as RCTourStepProps } from '@rc-component/tour';
export interface TourProps extends Omit<RCTourProps, 'renderPanel'> {
    steps?: TourStepProps[];
    className?: string;
    prefixCls?: string;
    current?: number;
    stepRender?: (current: number, total: number) => ReactNode;
    type?: 'default' | 'primary';
}
export interface TourStepProps extends RCTourStepProps {
    cover?: ReactNode;
    nextButtonProps?: {
        children?: ReactNode;
        onClick?: () => void;
        className?: string;
        style?: React.CSSProperties;
    };
    prevButtonProps?: {
        children?: ReactNode;
        onClick?: () => void;
        className?: string;
        style?: React.CSSProperties;
    };
    stepRender?: (current: number, total: number) => ReactNode;
    type?: 'default' | 'primary';
}
export interface TourLocale {
    Next: string;
    Previous: string;
    Finish: string;
}
