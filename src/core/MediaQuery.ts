import { actions } from "../jredux/reducer";
import { dispatch } from "../jredux/index";
import Device from "../utils/Device";
const { setMediaQuery } = actions

function updateMediaQuery() {
    let device = 10
    if (window.matchMedia("(max-width: 321px)").matches) {
        device = Device.TINY //1
    } else if (window.matchMedia("(max-width: 480px)").matches) {
        device = Device.MOBILE //2
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        device = Device.TABLET //3
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        device = Device.LAPTOP //4
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
        device = Device.DESKTOP //5
    } else if (window.matchMedia("(max-width: 1201px)").matches) {
        device = Device.TV //6
    }
    dispatch(setMediaQuery({ device, ...window.screen }))
}
updateMediaQuery()
export default () => window.onresize = updateMediaQuery
