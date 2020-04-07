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
    render(): void;
    private node;
    readonly props: any[];
    private update;
    private domTree;
    state: any;
    constructor(props?: any);
    setState(NewState: {}, e?: Event): Promise<any>;
    setEffect(NewState: {}): void;
    private generateDomTree;
    private domTreeTraversal;
    private updateDom;
    private componentMounted;
    private focusTarget;
    connect(): any;
    private initDomTree;
}
export declare const Jeddy: {
    Init(entryNode: any): void;
};
export {};
