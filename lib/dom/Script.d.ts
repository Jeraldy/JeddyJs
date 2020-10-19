declare const Script: ({ children, async, charSet, defer, src, type, attributes }?: {
    children?: Array<HTMLElement | Text>;
    id?: string;
    async?: boolean;
    charSet?: string;
    defer?: string;
    src?: string;
    type?: string;
    attributes?: {};
}) => HTMLElement | Text;
export default Script;
