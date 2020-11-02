export declare const replaceReducer: (rootReducer: any) => void;
export declare const register: (newReducers: any) => import("redux").CombinedState<{
    initReducer: {
        availHeight: number;
        availWidth: number;
        colorDepth: number;
        height: number;
        orientation: ScreenOrientation;
        pixelDepth: number;
        width: number;
        device: number;
    };
}>;
export declare const dispatch: (props: any) => any;
export declare const updateState: (context: any) => void;
export declare const connect: (mapStoreToState: any, index?: number) => (widget: any) => (args: any) => any;
export declare const createReducer: (reducer: any) => import("@reduxjs/toolkit").Slice<unknown, import("@reduxjs/toolkit").SliceCaseReducers<unknown>, string>;
