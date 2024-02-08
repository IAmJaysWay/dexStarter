import type { RateProps as RcRateProps } from 'rc-rate/lib/Rate';
import * as React from 'react';
export interface RateProps extends RcRateProps {
    tooltips?: Array<string>;
}
declare const Rate: React.ForwardRefExoticComponent<RateProps & React.RefAttributes<unknown>>;
export default Rate;
