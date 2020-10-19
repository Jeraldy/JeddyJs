import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {}

const Main = (args?: args) => {
  return Node(args, 'main');
}

export default Main;
