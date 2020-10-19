import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Table = (args?: args) => {
  return Node(args, 'table');
}

export default Table;
