import * as React from 'react';
import type { ProgressProps, ProgressSize } from './progress';
interface ProgressStepsProps extends ProgressProps {
    steps: number;
    size?: ProgressSize;
    strokeColor?: string | string[];
    trailColor?: string;
}
declare const Steps: React.FC<ProgressStepsProps>;
export default Steps;
