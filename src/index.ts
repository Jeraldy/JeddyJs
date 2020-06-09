import { generateHTree, updateElement } from './core/Reconcile';
import { replaceReducer, state } from "./jredux";
import { combineReducers } from 'redux';

interface LifeCycleMethods {
    componentDidMount(): void
    componentDidUpdate(): void
    componetWillUpdate(): void
    mapStoreToState(reduxState: any): {}
    render(): any
}

export class StatefulWidget implements LifeCycleMethods {
    mapStoreToState(reduxState: any): {} { return {} }
    componentDidMount(): void { }
    componentDidUpdate(): void { }
    componetWillUpdate(): void { }
    render(): any { throw new Error("Method not implemented."); }
    private node: any;
    private _node: any;
    readonly props: any = {};
    state: any = {}

    constructor(props?: any) {
        this.props = props
        if (props.reducers) {
            replaceReducer(combineReducers({ ...props.reducers }))
        }
        this.componentMounted()
    }

    async setState(newState: {}) {
        this.componetWillUpdate()
        this.state = { ...this.state, ...newState }
        let newNode = this.render()
        let _newNode = generateHTree(newNode)
        // let _node = generateHTree(this.node)
        console.log("_newNode::::::::::::::::::::::::")
        console.log(_newNode)
        console.log("_node::::::::::::::::::::::::")
        // console.log(_node)
        updateElement(document.getElementById("root"), _newNode, this._node)
        this._node = _newNode
        this.componentDidUpdate()
        return this.state
    }

    private componentMounted() {
        document
            .addEventListener("DOMContentLoaded", (_) => {
                this.componentDidMount()
            });
    }

    connect() {
        this.node = this.render()
        this._node = generateHTree(this.node)
        return this.node
    }
}

export const Jeddy = {
    Init({ app }: { app: HTMLElement }) {
        updateElement(document.getElementById("root"), generateHTree(app))
    },
}
