import Size from "../../utils/Size";
import * as CSS from "../../css/index";
declare const _default: {
    all: (size: Size) => CSS.Properties;
    only: ({ left, right, top, bottom }: {
        left: Size;
        right: Size;
        top: Size;
        bottom: Size;
    }) => CSS.Properties;
};
export default _default;
