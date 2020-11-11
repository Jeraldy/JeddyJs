import Row from "jeddy/layouts/Row"
import Card from "jeddy/widgets/Card";
import Menu from "./PartIMenu/index";
import Div from "jeddy/dom/Div";
import PartII from "./PartIIMenu/index";
import Strong from "jeddy/dom/Strong";
import Step1 from "./Sections/Step1";
import Step2 from "./Sections/Step2";
import Step3 from "./Sections/Step3";
import Step4 from "./Sections/Step4";
import Step5 from "./Sections/Step5";
import { connect } from "jeddy/jredux";
import Step10 from "./Sections/Step10";
import Step9 from "./Sections/Step9";
import Step8 from "./Sections/Step8";
import Step7 from "./Sections/Step7";
import Step6 from "./Sections/Step6";

const GettingStarted = ({ activePart }) => {
    return  Row({
        children: [
   
            Div({
                children: [
                    Div({
                        children: ["Part I: ", Strong({ children: ["Main State"] })],
                        style: {
                            padding: "8px"
                        }
                    }),
                    Menu(),
                    Div({
                        children: ["Part II: ", Strong({ children: ["Redux State"] })],
                        style: {
                            padding: "8px",
                            marginTop: "20px"
                        }
                    }),
                    PartII(),
                ],
            }),
            Card({
                children: [activeSection(activePart)],
                style: {
                    marginLeft: "50px",
                    borderRadius: "8px",
                    padding: "10px",
                    marginRight: "50px"
                }
            }),
        ],
        wrapContent: false,
    })
}

function activeSection(activePart) {
    switch (activePart) {
        case 1: return Step1()
        case 2: return Step2()
        case 3: return Step3()
        case 4: return Step4()
        case 5: return Step5()
        case 6: return Step6()
        case 7: return Step7()
        case 8: return Step8()
        case 9: return Step9()
        case 10: return Step10()
    }
}

const mapStateToProps = (state) => {
    return { ...state.gettingStartedReducer, }
}
export default connect(mapStateToProps)(GettingStarted);