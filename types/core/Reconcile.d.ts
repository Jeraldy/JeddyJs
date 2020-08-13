declare function updateElement($parent: any, newNode: any, oldNode: any, index?: number): void;
declare function generateHTree(node: HTMLElement): {
    type: string;
    props: {};
    children: any;
};
export { generateHTree, updateElement };
