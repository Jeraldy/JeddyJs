import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const H5 = (args?: args) => {
  return Node(args, 'h5');
}

export default H5;
