import RowAlignment from "./RowAlignment";
declare const Row: ({ children, align, id, backgroundColor, wrapContent }: {
    children: (HTMLElement | Text)[];
    align?: RowAlignment;
    wrapContent?: boolean;
    id?: string;
    backgroundColor?: string;
}) => HTMLElement;
export default Row;
