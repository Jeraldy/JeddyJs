import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  value?: string,
  placeholder?: string,
  autocomplete?: string,
  ariaLabel?: string,
  type: string,
  checked?: boolean
}

export default (args?: args) => {
  if (args.type == null) {
    throw new Error("Input type is required");
  }
  return Node({ ...args, type: args.type }, 'input');
}
