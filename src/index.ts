import { generateHTree, updateElement } from './core/Reconcile';
import { register } from "./jredux/index";

interface LifeCycleMethods {
    componentDidMount(): void
    componentDidUpdate(): void
    componetWillUpdate(): void
    mapStoreToState(reduxState: any): {}
    render(): any
}

export class StatefulWidget implements LifeCycleMethods {
    componentDidMount(): void { }
    componentDidUpdate(): void { }
    componetWillUpdate(): void { }
    mapStoreToState(reduxState: any): {} { return {} }
    render(): any { throw new Error("Method not implemented."); }
    private node: any;
    state: any = {}
    props: any = {};

    constructor(props?: any) {
        this.props = props
        if (props && props.reducers) {
            register(props.reducers)
        }
        this.componentMounted()
    }

    setState(newState: {}) {
        this.componetWillUpdate()
        this.state = { ...this.state, ...newState }
        let newTree = this.render()
        let oldTree = this.node
        updateElement(
            document.getElementById('root'),
            generateHTree(newTree),
            generateHTree(oldTree)
        )
        this.node = newTree
        this.componentDidUpdate()
        return this.state
    }

    private componentMounted() {
        document.addEventListener("DOMContentLoaded", (_) => {
            this.componentDidMount()
        });
    }

    connect() {
        this.node = this.render()
        return this.node
    }

}

export const Jeddy = {
    Init({ app }: { app: HTMLElement }) {
        updateElement(
            document.getElementById('root'),
            generateHTree(app),
            0
        )
    },
}
