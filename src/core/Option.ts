import Node from './Node';
import TextView from './TextView';

const Option = (props: any) => {
  props.children = [TextView(props.text || '')];
  delete props.text;
  return Node(props, 'option');
}

export default Option;
