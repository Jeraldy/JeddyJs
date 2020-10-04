declare const Style: ({ media, type, children, attributes }?: {
    media?: string;
    type?: string;
    children?: Array<HTMLElement | Text>;
    attributes?: {};
}) => HTMLElement | Text;
export default Style;
