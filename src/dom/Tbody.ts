import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Tbody = (args?: args) => {
  return Node(args, 'tbody');
}

export default Tbody;
