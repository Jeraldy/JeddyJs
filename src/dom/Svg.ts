import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Svg = (args?: args) => {
  return Node(args, 'svg');
}

export default Svg;
