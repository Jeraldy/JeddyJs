import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { tag: string }

export default (args?: args) => {
    if (args.tag == null) {
        throw new Error("Element tag is required");
    }
    return Node(args, args.tag)
}
