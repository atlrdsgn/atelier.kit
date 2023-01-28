type Measurable = {
    getBoundingClientRect(): ClientRect;
};
/**
 * Observes an element's rectangle on screen (getBoundingClientRect)
 * This is useful to track elements on the screen and attach other elements
 * that might be in different layers, etc.
 */
declare function observeElementRect(
/** The element whose rect to observe */
elementToObserve: Measurable, 
/** The callback which will be called when the rect changes */
callback: CallbackFn): () => void;
type CallbackFn = (rect: ClientRect) => void;
export { observeElementRect };
export type { Measurable };
/**
 * Use this custom hook to get access to an element's rect (getBoundingClientRect)
 * and observe it along time.
 */
declare function useRect(measurable: Measurable | null): ClientRect | undefined;
export { useRect };
//# sourceMappingURL=observeElementRect.d.ts.map