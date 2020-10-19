import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  href?: string,
  download?: string,
  hrefLang?: string,
  media?: string,
  ping?: string,
  referrerPolicy?: string,
  rel?: string,
  target?: string,
}

const A = (args?: args) => {
  return Node(args, 'a');
}

export default A;
