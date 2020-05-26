import Node from '../core/Node';
import { NodeParams } from "../core/NodeParams";

export interface args extends NodeParams {}

const Span = (args?: args) => {
  return Node(args, 'span');
}

export default Span;
