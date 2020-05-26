import Node from '../core/Node';
import { NodeArgs } from '../core/Args';

export interface args extends NodeArgs {
  checked?: boolean
}

const CheckBoxInput = (args?: args) => {
  return Node({
    ...args,
    type: "checkbox"
  }, 'input');
}


export default CheckBoxInput;
