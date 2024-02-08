import type { ReactNode } from 'react';
import type { TourStepProps } from './interface';
declare const panelRender: (props: TourStepProps, current: number, type: TourStepProps['type']) => ReactNode;
export default panelRender;
