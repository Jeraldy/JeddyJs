import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  value?: string
}

const TextArea = (args?: args) => {
  return Node(args, 'textarea');
}

export default TextArea;
