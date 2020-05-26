import Node from '../core/Node';
import { NodeParams } from "./../params/NodeParams";

export interface args extends NodeParams { }

const Header = (args?: args) => {
  return Node(args, 'header');
}

export default Header;
