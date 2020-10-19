import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const Header = (args?: args) => {
  return Node(args, 'header');
}

export default Header;
