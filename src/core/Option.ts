import Node from './Node';
import TextView from './TextView';

const Option = ({ value, text, attributes }: { value?: string, text?: string, attributes?: {} }) => {
  return Node({
    children: [TextView(text || '')],
    value,
    ...attributes
  }, 'option');
}

export default Option;
