import Node from './Node';

const CheckBoxInput = (props: any) => {
  props.type = 'checkbox';
  if (!props.checked) {
    delete props.checked;
  }
  return Node(props, 'input');
}

export default CheckBoxInput;
