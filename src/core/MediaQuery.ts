import { actions } from "../jredux/reducer";
import { dispatch } from "../jredux/index";
import Device from "../utils/Device";
const { setMediaQuery } = actions

function updateMediaQuery() {
    let device = 0
    if (window.matchMedia("(max-width: 321px)").matches) {
        device = Device.TINY
    } else if (window.matchMedia("(max-width: 480px)").matches) {
        device = Device.MOBILE
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        device = Device.TABLET
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        device = Device.LAPTOP
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
        device = Device.DESKTOP
    } else if (window.matchMedia("(max-width: 1201px)").matches) {
        device = Device.TV
    }
    dispatch(setMediaQuery({ device, ...window.screen }))
}
updateMediaQuery()
export default () => window.onresize = updateMediaQuery
