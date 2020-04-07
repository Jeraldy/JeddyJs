import _Table from './_Table';
import '../../styles/data.table.css';
declare const _default: ({ data, titles, actions, title }: {
    data: any[][];
    titles: {
        title: string;
        style: any;
    }[];
    actions: any[];
    title: string;
}) => _Table;
export default _default;
