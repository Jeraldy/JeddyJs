import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs { }

const Article = (args?: args) => {
  return Node(args, 'article');
}

export default Article;
