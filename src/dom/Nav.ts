import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Nav = (args?: args) => {
  return Node(args, 'nav');
}

export default Nav;
