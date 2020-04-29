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
    render(): HTMLElement;
    private node;
    readonly props: {};
    private domTree;
    state: {};
    constructor(props?: any);
    setState(NewState: {}, e?: Event): Promise<{}>;
    setEffect(NewState: {}): void;
    private generateDomTree;
    private domTreeTraversal;
    private updateDom;
    private componentMounted;
    private focusTarget;
    connect(): HTMLElement;
    private initDomTree;
}
export declare const Jeddy: {
    Init(entryNode: any, reduxStore?: any): void;
};
export {};
