import Node from './Node';

export default (props: any) => {
  props.type = 'date';
  return Node(props, 'input');
};
