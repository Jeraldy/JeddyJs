import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const HGroup = (args?: args) => {
  return Node(args, 'hgroup');
}

export default HGroup;
