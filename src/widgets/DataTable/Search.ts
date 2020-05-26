import TextInput from "../../dom/TextInput"
import Div from "../../dom/Div";
import Label from "../../dom/Label";
import I from "../../dom/I";
import TextView from "../../dom/TextView";
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
                onKeyUp: (e) => props.filter(e),
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
