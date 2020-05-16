import { converToHFun, updateElement } from './reconcile';

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
            document.getElementById("root"),
            converToHFun(newNode),
            converToHFun(this.node)
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
    Init(entryNode: any) {
        console.log(converToHFun(entryNode))
        updateElement(
            document.getElementById("root"),
            converToHFun(entryNode)
        )
    }
}
