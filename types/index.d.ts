interface LifeCycleMethods {
    connectedCallBack(): void;
    updatedCallback(): void;
    willUpdateCallBack(): void;
    mapStoreToState(reduxState: any): {};
    render(): any;
}
export declare class StatefulWidget implements LifeCycleMethods {
    connectedCallBack(): void;
    updatedCallback(): void;
    willUpdateCallBack(): void;
    mapStoreToState(reduxState: any): {};
    render(): any;
    private node;
    state: any;
    props: any;
    constructor(props?: any);
    setState(newState: any): any;
    private componentMounted;
}
export declare const Jeddy: {
    Init({ app }: {
        app: HTMLElement | StatefulWidget;
    }): void;
};
export {};
