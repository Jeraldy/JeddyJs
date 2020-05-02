import Node from './Node';

const Script = ({
  children,
  async,
  charSet,
  defer,
  src,
  type,
  attributes
}: {
  children?: Array<HTMLElement | Text>,
  id?: string,
  async?: boolean,
  charSet?: string,
  defer?: string,
  src?: string,
  type?: string,
  attributes?: {}
}= {}) => {
  return Node({
    children,
    async: async ? "async" : "",
    charset: charSet,
    defer,
    src,
    type,
    ...attributes
  }, 'script');
}

export default Script;
