import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {}

const Main = (args?: args) => {
  return Node(args, 'main');
}

export default Main;
