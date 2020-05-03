
export default (props = {}, tag: string) => {
  //@ts-ignore
  const { children, style, ...rest } = { ...props }

  var node = document.createElement(tag);

  if (children) {
    children.forEach((child: HTMLElement | Text) => {
      if (child) {
        node.appendChild(child);
      }
    });
  }

  if (style) {
    for (var key in style) {
      node.style[key] = style[key]
    }
  }

  for (var key of Object.keys(rest)) {
    if (rest[key]) {
      if (typeof rest[key] === 'function') {
        node[key] = rest[key];
      } else {
        node.setAttribute(key, rest[key]);
      }
    }
  }
  return node;
};

