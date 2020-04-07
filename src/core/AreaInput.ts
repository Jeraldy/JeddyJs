import Node from './Node';

export default (props: any) => {
  props.ref = Math.random()
    .toString(36)
    .substring(7)
    .toString();
  return Node(props, 'textarea');
};
