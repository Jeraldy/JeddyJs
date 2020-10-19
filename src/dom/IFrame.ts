import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const IFrame = (args?: args) => {
  return Node(args, 'iframe');
}

export default IFrame;
