import Row from "jeddy/layouts/Row"
import Card from "jeddy/widgets/Card";
import Pager from "./Pager";
import Menu from "./Menu";

export default () => {
    return Row({
        children: [
            Menu(),
            Card({
                children: [Pager()],
                style: {
                    //width: "60%",
                    marginLeft: "50px",
                    borderRadius: "8px",
                    padding: "10px"
                }
            })
        ],
        wrapContent: false
    })
}