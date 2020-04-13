import Size from "../../utils/Size"

export default {
    all: (size: Size): Object => {
        return { margin: size }
    },
    only: ({ left, right, top, bottom }: {
        left: Size, right: Size, top: Size, bottom: Size
    }): Object => {
        return {
            marginLeft: left || Size._0px,
            marginRight: right || Size._0px,
            marginTop: top || Size._0px,
            marginBottom: bottom || Size._0px
        }
    }
}