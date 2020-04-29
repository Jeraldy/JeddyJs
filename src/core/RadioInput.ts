import Node from './Node';

const RadioInput = (props: any) => {
  props.type = 'radio';
  props.name = props.group || '';
  delete props.group;
  props.checked = props.controller == props.value;
  if (!props.checked) {
    delete props.checked;
  }
  delete props.controller;
  return Node(props, 'input');
}

export default RadioInput;
