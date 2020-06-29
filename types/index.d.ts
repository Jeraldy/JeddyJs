interface LifeCycleMethods {
    componentDidMount(): void;
    componentDidUpdate(): void;
    componetWillUpdate(): void;
    mapStoreToState(reduxState: any): {};
    render(): any;
}
export declare class StatefulWidget implements LifeCycleMethods {
    componentDidMount(): void;
    componentDidUpdate(): void;
    componetWillUpdate(): void;
    mapStoreToState(reduxState: any): {};
    render(): any;
    private node;
    state: any;
    props: any;
    constructor(props?: any);
    setState(newState: {}): Promise<any>;
    private componentMounted;
    private createWrapper;
    connect(): any;
}
export declare const Jeddy: {
    Init({ app, root }: {
        app: HTMLElement;
        root: HTMLElement;
    }): void;
};
export {};
