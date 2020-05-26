import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Table = (args?: args) => {
  return Node(args, 'tale');
}

export default Table;
