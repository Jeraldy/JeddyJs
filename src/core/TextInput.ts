import Node from './Node';

const TextInput = (props: any) => {
  props.type = 'text';
  return Node(props, 'input');
}

export default TextInput;
