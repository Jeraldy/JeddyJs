import RowAlignment from "./RowAlignment";
declare const Row: ({ children, align, id }: {
    children: any[];
    align?: RowAlignment;
    id?: any;
}) => HTMLElement;
export default Row;
