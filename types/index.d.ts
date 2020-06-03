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
    setState(newState: {}): Promise<any>;
    private componentMounted;
    connect(): any;
}
export declare const Jeddy: {
    Init({ app, root }: {
        app: HTMLElement;
        root: HTMLElement;
    }): {
        Reducers(reducers: {}): void;
    };
};
export {};
