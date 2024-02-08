/// <reference types="react" />
declare type TransformType = {
    x: number;
    y: number;
    rotate: number;
    scale: number;
};
export default function useImageTransform(imgRef: React.MutableRefObject<HTMLImageElement>): {
    transform: {
        x: number;
        y: number;
        rotate: number;
        scale: number;
    };
    resetTransform: () => void;
    updateTransform: (newTransform: Partial<TransformType>) => void;
    dispatchZoonChange: (ratio: number, clientX?: number, clientY?: number) => void;
};
export {};
