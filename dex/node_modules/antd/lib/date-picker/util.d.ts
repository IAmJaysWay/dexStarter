import type { PickerMode } from 'rc-picker/lib/interface';
import type { DirectionType } from '../config-provider';
import type { SelectCommonPlacement } from '../_util/motion';
import type { PickerLocale } from './generatePicker';
export declare function getPlaceholder(picker: PickerMode | undefined, locale: PickerLocale, customizePlaceholder?: string): string;
export declare function getRangePlaceholder(picker: PickerMode | undefined, locale: PickerLocale, customizePlaceholder?: [string, string]): [string, string] | undefined;
export declare function transPlacement2DropdownAlign(direction: DirectionType, placement?: SelectCommonPlacement): {
    points: string[];
    offset: number[];
    overflow: {
        adjustX: number;
        adjustY: number;
    };
};
