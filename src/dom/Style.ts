import Node from '../core/Node';

const Style = ({
  media,
  type,
  children,
  attributes
}: {
  media?: string,
  type?: string,
  children?: Array<HTMLElement | Text>,
  attributes?: {}
}= {}) => {
  return Node({
    type,
    media,
    children,
    ...attributes
  }, 'style');
}

export default Style;
