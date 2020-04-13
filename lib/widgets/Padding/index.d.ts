declare const _default: ({ child, padding }: {
    child: Node;
    padding: {
        all: (size: import("../../utils/Size").default) => Object;
        only: ({ left, right, top, bottom }: {
            left: import("../../utils/Size").default;
            right: import("../../utils/Size").default;
            top: import("../../utils/Size").default;
            bottom: import("../../utils/Size").default;
        }) => Object;
    };
}) => HTMLElement;
export default _default;
