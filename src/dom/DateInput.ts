import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  value?: string
}

const DateInput = (args?: args) => {
  return Node({
    ...args,
    type: "date"
  }, 'input');
}

export default DateInput;
