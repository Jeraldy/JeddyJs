import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  rowspan?: number,
  colspan?: number,
}

const Td = (args?: args) => {
  return Node(args, 'td');
}

export default Td;
