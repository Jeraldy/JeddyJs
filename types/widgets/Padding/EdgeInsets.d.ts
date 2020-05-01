import Size from "../../utils/Size";
import * as CSS from "../../css/index";
declare const _default: {
    all: (size: Size) => CSS.Properties<string | 0>;
    only: ({ left, right, top, bottom }: {
        left: Size;
        right: Size;
        top: Size;
        bottom: Size;
    }) => CSS.Properties<string | 0>;
};
export default _default;
