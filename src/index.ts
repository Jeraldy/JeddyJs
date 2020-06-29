import { generateHTree, updateElement } from './core/Reconcile';
import { replaceReducer } from "./jredux/index";
import { combineReducers } from 'redux';

interface LifeCycleMethods {
    componentDidMount(): void
    componentDidUpdate(): void
    componetWillUpdate(): void
    render(): any
}

export class StatefulWidget implements LifeCycleMethods {
    componentDidMount(): void { }
    componentDidUpdate(): void { }
    componetWillUpdate(): void { }
    render(): any { throw new Error("Method not implemented."); }
    private node: any;
    state: any = {}
    props: any = {};

    constructor(props?: any) {
        this.props = props
        if (props && props.reducers) {
            replaceReducer(combineReducers({ ...props.reducers }))
        }
        this.componentMounted()
    }

    async setState(newState: {}) {
        this.componetWillUpdate()
        this.state = { ...this.state, ...newState }
        let newTree = generateHTree(this.render())
        let oldTree = generateHTree(this.node)
        updateElement(document.getElementById('root'), newTree, oldTree)
        this.componentDidUpdate()
        return this.state
    }

    private componentMounted() {
        document.addEventListener("DOMContentLoaded", (_) => {
            this.componentDidMount()
        });
    }

    private createWrapper(child: any): any {
        let wrapper = document.createElement("div")
        wrapper.id = this.constructor.name
        wrapper.appendChild(child)
        return wrapper
    }

    connect() {
        this.node = this.render()
        return this.node
    }

}

export const Jeddy = {
    Init({ app, root }: { app: HTMLElement, root: HTMLElement }) {
        root.appendChild(app)
    },
}
