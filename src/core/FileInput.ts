import Node from './Node';

const FileInput = (props: any) => {
  props.type = 'file';
  return Node(props, 'input');
}

export default FileInput;
