import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Pre = (args?: args) => {
  return Node(args, 'pre');
}

export default Pre;
