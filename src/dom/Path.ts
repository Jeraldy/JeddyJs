import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Path = (args?: args) => {
  return Node(args, 'path');
}

export default Path;
