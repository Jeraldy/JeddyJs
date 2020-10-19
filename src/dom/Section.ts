import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Section = (args?: args) => {
  return Node(args, 'section');
}

export default Section;
