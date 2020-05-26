import Node from '../core/Node';

const Option = ({ value, text, attributes }:
  { value?: string, text?: string, attributes?: {} }
  = {}) => {
  return Node({
    children: [text || ''],
    value,
    ...attributes
  }, 'option');
}

export default Option;
