import { generateHTree, updateElement } from './core/Reconcile';
import { replaceReducer } from "./jredux";
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
    readonly props: any = {};
    state: any = {}

    constructor(props?: any) {
        this.props = props
        this.componentMounted()
    }

    async setState(newState: {}) {
        this.componetWillUpdate()
        this.state = { ...this.state, ...newState }
        let newNode = this.render()
        updateElement(
            document.getElementById("root"),
            generateHTree(newNode),
            generateHTree(this.node)
        )
        this.node = newNode
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
        return this.node
    }
}

export const Jeddy = {
    Init({ app }: { app: HTMLElement }) {
        updateElement(document.getElementById("root"), generateHTree(app))
        return {
            Reducers(reducers: {}) {
                replaceReducer(
                    combineReducers({ ...reducers })
                )
            }
        }
    },
}
