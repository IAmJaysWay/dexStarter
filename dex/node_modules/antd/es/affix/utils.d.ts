export type BindElement = HTMLElement | Window | null | undefined;
export declare function getTargetRect(target: BindElement): DOMRect;
export declare function getFixedTop(placeholderReact: DOMRect, targetRect: DOMRect, offsetTop?: number): number | undefined;
export declare function getFixedBottom(placeholderReact: DOMRect, targetRect: DOMRect, offsetBottom?: number): number | undefined;
interface ObserverEntity {
    target: HTMLElement | Window;
    affixList: any[];
    eventHandlers: {
        [eventName: string]: any;
    };
}
export declare function getObserverEntities(): ObserverEntity[];
export declare function addObserveTarget<T>(target: HTMLElement | Window | null, affix?: T): void;
export declare function removeObserveTarget<T>(affix: T): void;
export {};
