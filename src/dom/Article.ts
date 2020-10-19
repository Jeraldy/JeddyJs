import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs { }

const Article = (args?: args) => {
  return Node(args, 'article');
}

export default Article;
