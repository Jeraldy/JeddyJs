import Node from './Node';
import TextView from './TextView';

export default (props: any) => {
  props.children = [TextView(props.text || '')];
  delete props.text;
  return Node(props, 'option');
};
