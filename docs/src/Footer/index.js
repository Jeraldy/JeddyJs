import Div from "jeddy/dom/Div"
import Row from "jeddy/layouts/Row";
import RowAlign from "jeddy/layouts/RowAlign";
import Html from "../Html";

const Footer = () => {
    return Div({
        children: [
            Div({
                children: [
                    Row({
                        children: [
                            Html(`Released under the MIT License | 
                            Copyright © ${new Date().getFullYear()} Jeraldy Deus`)
                        ],
                        align: RowAlign.Center
                    })
                ],
                style: {
                    //height: "50px",
                    backgroundColor: "#475050",
                    width: "100%",
                    color: "white",
                    padding: "15px 0",
                    textAlign: "center",
                    fontSize: "15px",
                     position: "absolute",
                    bottom: "0px"
                }
            })
        ],
        style:{
            height: "300px",
            position: "relative"
        }
    })
}

export default Footer;