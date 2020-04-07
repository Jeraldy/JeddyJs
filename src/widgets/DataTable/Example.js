import { StatefulWidget } from "../../tikiti/index";
import Div from "../../core/Div";
import SIZE from "../../utils/Size";
import Table from "./index";
import axios from 'axios';
import Menu, { toggleMenu } from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";
import ActionButton from '../Button/ActionButton'

class TableExample extends StatefulWidget {
    constructor() {
        super()
        this.state = { data: [] }
        return this.connect()
    }

    componentDidMount() {
        this.generateData()
    }

    async generateData() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        var data = []
        response.data.forEach((row) => {
            data.push([
                row.id,
                row.name,
                row.username,
                row.website,
                row.phone,
                row.email,
                "A",
                //this.action(row.id)
            ])
        });
        this.setState({ data })
    }

    action(id) {
        return Div({
            class: 'mdc-menu-surface--anchor',
            children: [
                ActionButton({
                    icon: 'more_vert',
                    onclick: () => toggleMenu(id),
                }),
                Menu({
                    id,
                    menuItems: [
                        MenuItem({ label: 'Details - ' + id }),
                        MenuItem({ label: 'Edit', }),
                        MenuItem({ label: 'Remove', }),
                        MenuItem({ label: 'Item x', })
                    ]
                })
            ],
        })
    }

    render() {
        return Table({
            title: 'Customers',
            titles: [
                { title: '#', style: { width: SIZE._10px } },
                { title: 'Name' },
                { title: 'Username' },
                { title: 'Website' },
                { title: 'Phone' },
                { title: 'Email' },
                { title: '', style: { width: SIZE._2px } },
            ],
            data: this.state.data,
            actions: [
                ActionButton({ icon: "add", props: { style: { color: 'gray' } } }),
                ActionButton({ icon: "more_vert", props: { style: { color: 'gray' } } }),
            ]
        })
    }
}


export default TableExample;