import Node from './Node';

export default (props: any) => {
  props.type = 'file';
  return Node(props, 'input');
};
