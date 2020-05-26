import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const Code = (args?: args) => {
  return Node(args, 'code');
}

export default Code;
