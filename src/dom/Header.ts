import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const Header = (args?: args) => {
  return Node(args, 'header');
}

export default Header;
