import Node from './Node';

export default (props: any) => {
  props.type = 'text';
  return Node(props, 'input');
};
