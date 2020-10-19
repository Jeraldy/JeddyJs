import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  value?: string
}

const NumberInput = (args?: args) => {
  return Node({ ...args, type: "number" }, 'input');
}

export default NumberInput;
