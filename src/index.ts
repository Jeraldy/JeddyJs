import { generateVTree, updateElement } from './core/Reconcile';
import { register } from "./jredux/index";
import MediaQuery from './core/MediaQuery';

interface LifeCycleMethods {
    connectedCallBack(): void
    updatedCallback(): void
    willUpdateCallBack(): void
    mapStoreToState(reduxState: any): {}
    render(): any
}

export class StatefulWidget implements LifeCycleMethods {
    connectedCallBack(): void { }
    updatedCallback(): void { }
    willUpdateCallBack(): void { }
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
        MediaQuery()
        this.componentMounted()
    }

    setState(newState: {}) {
        this.willUpdateCallBack()
        this.state = { ...this.state, ...newState }
        let newTree = this.render()
        let oldTree = this.node
        updateElement(
            document.getElementById('root'),
            generateVTree(newTree),
            generateVTree(oldTree)
        )
        this.node = newTree
        this.updatedCallback()
        return this.state
    }

    private componentMounted() {
        document.addEventListener("DOMContentLoaded", (_) => {
            this.connectedCallBack()
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
            generateVTree(app),
            0
        )
    },
}

