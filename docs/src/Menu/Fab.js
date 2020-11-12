import Card from "jeddy/widgets/Card";
import Center from "jeddy/layouts/Center";
import Icons from "jeddy/utils/Icons";
import Icon from "jeddy/widgets/Icon";
import { dispatch, connect } from "jeddy/jredux";
import { actions } from "../reducers/gettingStartedReducer";
const { toggleSmallMenu } = actions

const Fab = ({ isSmallMenuOpen }) => {
    return Card({
        children: [
            Center({
                child: Icon({
                    name: isSmallMenuOpen ? Icons.close : Icons.menu
                })
            })
        ],
        style: {
            padding: "10px",
            borderRadius: "10%",
            width: "20px",
            height: "20px",
            position: "fixed",
            top: "150px",
            right: "-2px",
            zIndex: 1,
            color: "#00BEFF"
        },
        onClick: () => dispatch(toggleSmallMenu())
    })
}
const mapStateToProps = (state) => ({
    ...state.gettingStartedReducer,
})

export default connect(mapStateToProps)(Fab)