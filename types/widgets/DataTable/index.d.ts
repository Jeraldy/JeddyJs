import _Table from './_Table';
import '../../styles/data.table.css';
import * as CSS from "../../css/index";
declare const _default: ({ data, titles, actions, title }: {
    data: any[][];
    titles: {
        title: string;
        style: CSS.Properties<string | 0>;
    }[];
    actions: any[];
    title: string;
}) => _Table;
export default _default;
