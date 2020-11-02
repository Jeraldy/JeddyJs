export declare const reducer: import("redux").Reducer<{
    availHeight: number;
    availWidth: number;
    colorDepth: number;
    height: number;
    orientation: ScreenOrientation;
    pixelDepth: number;
    width: number;
    device: number;
}, import("redux").AnyAction>, actions: import("@reduxjs/toolkit").CaseReducerActions<{
    setMediaQuery(state: import("immer/dist/internal").WritableDraft<{
        availHeight: number;
        availWidth: number;
        colorDepth: number;
        height: number;
        orientation: ScreenOrientation;
        pixelDepth: number;
        width: number;
        device: number;
    }>, action: {
        payload: any;
        type: string;
    }): any;
}>;
