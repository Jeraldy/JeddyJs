import _Table from './_Table';
import '../../styles/data.table.css';
import * as CSS from "../../css/index";

export default (
    {
        data,
        titles,
        actions,
        title
    }: {
        data: Array<Array<any>>,
        titles: Array<{ title: string, style: CSS.Properties }>,
        actions: Array<any>,
        title: string
    }) => {
    return new _Table({ data, titles, actions, title })
}
