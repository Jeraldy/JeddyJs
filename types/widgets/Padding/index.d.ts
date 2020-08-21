import * as CSS from "../../css/index";
declare const _default: ({ child, padding }: {
    child: HTMLElement | Text;
    padding: {
        all: (size: import("../../utils/Size").default) => CSS.Properties<string | 0>;
        only: ({ left, right, top, bottom }: {
            left: import("../../utils/Size").default;
            right: import("../../utils/Size").default;
            top: import("../../utils/Size").default;
            bottom: import("../../utils/Size").default;
        }) => CSS.Properties<string | 0>;
    };
}) => any;
export default _default;
