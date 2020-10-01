declare function updateElement($parent: any, newNode: any, oldNode: any, index?: number): void;
declare function generateHTree(node: any): {
    type: any;
    props: {};
    children: any;
};
declare function sum(a: any, b: any): any;
export { generateHTree, updateElement, sum };
