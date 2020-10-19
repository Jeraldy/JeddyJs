import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  for?: string
}

const Label = (args?: args) => {
  return Node(args, 'label');
}

export default Label;
