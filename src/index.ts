import { generateHTree, updateElement } from './core/Reconcile';

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

    async setState(NewState: {}, e?: Event) {
        this.componetWillUpdate()
        this.state = { ...this.state, ...NewState }
        let newNode = this.render()
        updateElement(
            this.node.parentNode,
            generateHTree(newNode),
            generateHTree(this.node)
        )
        this.node = newNode
        this.componentDidUpdate()
        return this.state
    }

    private componentMounted() {
        document
            .addEventListener("DOMContentLoaded",
            (_) => this.componentDidMount());
    }

    connect() {
        this.node = this.render()
        return this.node
    }

}

export const Jeddy = {
    Init(entryNode: HTMLElement, rootNode: HTMLElement) {
        updateElement(rootNode, generateHTree(entryNode))
    }
}
