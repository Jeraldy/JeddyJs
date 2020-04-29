import Node from './Node';

/**
 * props takes the following args
 * @returns html Node
 * 
*/
const AreaInput = (props: any) => {
  return Node(props, 'textarea');
}

export default AreaInput;
