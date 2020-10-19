import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const Footer = (args?: args) => {
  return Node(args, 'footer');
}

export default Footer;
