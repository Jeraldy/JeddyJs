import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const Code = (args?: args) => {
  return Node(args, 'code');
}

export default Code;
