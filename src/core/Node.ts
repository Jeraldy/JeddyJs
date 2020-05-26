import TextView from "../dom/TextView";

export default (props = {}, tag: string) => {
  //@ts-ignore
  const { children, style, ...rest } = { ...props }

  let node = document.createElement(tag);

  if (children) {
    children.forEach((child: HTMLElement | Text) => {
      if (child) {
        if (typeof child == 'string') {
          node.appendChild(TextView(child));
        } else {
          node.appendChild(child);
        }
      }
    });
  }

  if (style) {
    for (let key in style) {
      node.style[key] = style[key]
    }
  }

  for (let key of Object.keys(rest)) {
    if (rest[key]) {
      if (typeof rest[key] === 'function') {
        node[key.toLocaleLowerCase()] = rest[key];
      } else {
        node.setAttribute(key.toLocaleLowerCase(), rest[key]);
      }
    }
  }

  return node;
};

