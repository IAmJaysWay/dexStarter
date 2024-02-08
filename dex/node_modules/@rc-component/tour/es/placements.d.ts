import type { BuildInPlacements } from 'rc-trigger';
export declare type PlacementType = 'left' | 'leftTop' | 'leftBottom' | 'right' | 'rightTop' | 'rightBottom' | 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'center';
export declare const placements: BuildInPlacements;
export interface PlacementsConfig {
    arrowWidth?: number;
    horizontalArrowShift?: number;
    verticalArrowShift?: number;
    arrowPointAtCenter?: boolean;
    placement: PlacementType;
}
export declare function getCenterPlacements(config: PlacementsConfig): import("rc-trigger/lib/interface").AlignType;
export default placements;
