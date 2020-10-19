import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  height?: string,
  width?: string,
  alt?: string,
  src?: string,
 }

const Img = (args?: args) => {
  return Node(args, 'img');
}

export default Img;
