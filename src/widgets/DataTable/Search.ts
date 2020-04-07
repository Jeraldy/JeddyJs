import TextInput from "../../core/TextInput"
import Div from "../../core/Div";
import Label from "../../core/Label";
import I from "../../core/I";
import TextView from "../../core/TextView";
import '../../styles/table.search.input.css';

export default (props: any) => {
    let style = {}

    if (props.query) {
        //@ts-ignore
        style.width = '300px'
    }

    return Div({
        children: [
            TextInput({
                id: "search-input",
                placeholder: "Search",
                class: "browser-default search-field",
                value: props.query,
                autocomplete: "off",
                ariaLabel: "Search box",
                //@ts-ignore
                onkeyup: (e: Event) => props.filter(e),
                style
            }),
            Label({
                for: "search-input",
                children: [
                    I({
                        class: "material-icons search-icon",
                        children: [
                            TextView("search")
                        ]
                    })
                ],
                style: {
                    position: 'relative',
                    right: '55px',
                    top: '-3px'
                }
            })
        ]
    })
}
