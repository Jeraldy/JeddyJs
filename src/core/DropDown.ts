import Node from './Node';

export default (props: any) => {
  const value = props.value;
  if (value) {
    delete props.value;
    let node = Node(props, 'select');
    //@ts-ignore
    node.value = value;
    return node;
  }
  return Node(props, 'select');
};
