import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Button = (args?: args) => {
  return Node(args, 'button');
}

export default Button;
