import Size from "../../utils/Size"
import * as CSS from "../../css/index";

export default {
    all: (size: Size): CSS.Properties => {
        return { margin: size }
    },
    only: ({ left, right, top, bottom }: {
        left: Size, right: Size, top: Size, bottom: Size
    }): CSS.Properties => {
        return {
            marginLeft: left || Size._0px,
            marginRight: right || Size._0px,
            marginTop: top || Size._0px,
            marginBottom: bottom || Size._0px
        }
    }
}