"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class StatefulWidget {
    constructor(props) {
        this.props = {};
        this.domTree = [];
        this.state = {};
        this.props = props;
        this.componentMounted();
    }
    mapStoreToState(reduxState) { return {}; }
    componentDidMount() { }
    componentDidUpdate() { }
    componetWillUpdate() { }
    render() { throw new Error("Method not implemented."); }
    setState(NewState, e) {
        return __awaiter(this, void 0, void 0, function* () {
            this.componetWillUpdate();
            this.state = Object.assign(Object.assign({}, this.state), NewState);
            let newNode = this.render();
            this.node.parentNode.replaceChild(newNode, this.node);
            this.node = newNode;
            this.initDomTree();
            this.focusTarget(e);
            this.componentDidUpdate();
            return this.state;
        });
    }
    setEffect(NewState) {
        this.componetWillUpdate();
        this.state = Object.assign(Object.assign({}, this.state), NewState);
        this.updateDom(this.render());
        this.componentDidUpdate();
    }
    generateDomTree(dom) {
        var names = [];
        var tree = [];
        var nodeList = this.domTreeTraversal(dom);
        nodeList.forEach((child) => {
            names.push(child.nodeName);
            var childProps = {};
            for (var key of Object.keys(child.attributes)) {
                var ch = child.attributes[key];
                childProps = Object.assign(Object.assign({}, childProps), { [ch.name]: ch.value });
            }
            tree.push(Object.assign(Object.assign({}, childProps), { child }));
            childProps = {};
        });
        return { names, tree, nodeList };
    }
    domTreeTraversal(dom) {
        var treeWalker = document.createTreeWalker(dom, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => NodeFilter.FILTER_ACCEPT }, false);
        var nodeList = [];
        var currentNode = treeWalker.currentNode;
        while (currentNode) {
            nodeList.push(currentNode);
            currentNode = treeWalker.nextNode();
        }
        return nodeList;
    }
    updateDom(newDom) {
        var newTree = this.generateDomTree(newDom);
        for (var i = 0; i < newTree.tree.length; i++) {
            for (var attr in this.domTree[i]) {
                if (attr != "child") {
                    //@ts-ignore	
                    if (this.domTree[i][attr] != newTree.tree[i][attr]) {
                        //@ts-ignore
                        this.domTree[i][attr] = newTree.tree[i][attr];
                        //@ts-ignore
                        this.domTree[i].child.setAttribute(attr, newTree.tree[i][attr]);
                    }
                }
            }
        }
    }
    componentMounted() {
        document
            .addEventListener("DOMContentLoaded", (_) => this.componentDidMount());
    }
    focusTarget(e) {
        if (e) {
            //@ts-ignore
            let el = document.getElementById(e.target.id);
            el.focus();
            //@ts-ignore
            el.selectionStart = el.selectionEnd = el.value.length;
        }
    }
    connect() {
        const _render = this.render();
        if (_render.nodeName === '#text') {
            let container = document.createElement('div');
            container.appendChild(_render);
            this.node = container;
        }
        else {
            this.node = _render;
        }
        this.initDomTree();
        return this.node;
    }
    initDomTree() {
        this.domTree = this.generateDomTree(this.node).tree;
    }
}
exports.StatefulWidget = StatefulWidget;
exports.Jeddy = {
    Init(entryNode) {
        document.body.appendChild(entryNode);
    }
};
//# sourceMappingURL=index2.js.map