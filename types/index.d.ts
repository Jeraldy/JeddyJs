interface LifeCycleMethods {
    componentDidMount(): void;
    componentDidUpdate(): void;
    componetWillUpdate(): void;
    mapStoreToState(reduxState: any): {};
    render(): any;
}
export declare class StatefulWidget implements LifeCycleMethods {
    mapStoreToState(reduxState: any): {};
    componentDidMount(): void;
    componentDidUpdate(): void;
    componetWillUpdate(): void;
    render(): any;
    private node;
    readonly props: any;
    state: any;
    constructor(props?: any);
    setState(NewState: {}, e?: Event): Promise<any>;
    private componentMounted;
    connect(): any;
}
export declare const Jeddy: {
    Init(entryNode: HTMLElement, rootNode: HTMLElement): void;
};
export {};
