import Node from './Node';

const DateInput = (props: any) => {
  props.type = 'date';
  return Node(props, 'input');
}

export default DateInput;
