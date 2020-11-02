import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const Address = (args?: args) => {
  return Node(args, 'address');
}

export default Address;
