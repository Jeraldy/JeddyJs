export function replaceReducer(rootReducer: any): void;
export function dispatch(props: any): any;
export function updateState(context: any): void;
export function connect(mapStoreToState: any, index?: number): (widget: any) => (args: any) => any;
export function createReducer(reducer: any): import("@reduxjs/toolkit").Slice<any, import("@reduxjs/toolkit").SliceCaseReducers<any>, string>;
