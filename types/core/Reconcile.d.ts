declare function updateElement($parent: any, newNode: any, oldNode: any, index?: number): void;
declare function generateHTree(node: any): {
    type: any;
    props: {};
    children: any;
};
export { generateHTree, updateElement };
