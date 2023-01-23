/**
/// <reference types="resize-observer-browser" />
*/
declare function useSize(element: HTMLElement | null): {
    width: number;
    height: number;
} | undefined;
export { useSize };
