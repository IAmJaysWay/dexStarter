import type React from 'react';
export declare type Direction = 'rtl' | 'ltr' | 'ttb' | 'btt';
export declare type OnStartMove = (e: React.MouseEvent | React.TouchEvent, valueIndex: number) => void;
export declare type AriaValueFormat = (value: number) => string;
