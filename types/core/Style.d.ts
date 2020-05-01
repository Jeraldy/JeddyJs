declare const Style: ({ media, type, children, attributes }: {
    media?: string;
    type?: string;
    children?: (HTMLElement | Text)[];
    attributes?: {};
}) => HTMLElement;
export default Style;
