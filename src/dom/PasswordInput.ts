import Node from '../core/Node';
import { NodeArgs } from '../core/CommonArgs';

export interface args extends NodeArgs {
  value?: string
}

const PasswordInput = (args?: args) => {
  return Node({ ...args, type: "password" }, 'input');
}

export default PasswordInput;
