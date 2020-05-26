import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const Circle = (args?: args) => {
  return Node(args, 'circle');
}

export default Circle;
