import TextView from "../dom/TextView";

export default (props = {}, tag: string) => {
  //@ts-ignore
  const { children, style, attrs, ...rest } = { ...props }

  let node = document.createElement(tag);

  if (children) {
    children.forEach((child: HTMLElement | Text) => {
      if (child) {
        if (typeof child == 'string') {
          node.appendChild(TextView(child));
        } else {
          node.appendChild(child);
          //@ts-ignore
          if (child.nodeName == "OPTION" && props.value == child.value) {
            //@ts-ignore
            child.setAttribute('selected', 'selected');
          }
        }
      }
    });
  }

  if (style) {
    for (let key in style) {
      node.style[key] = style[key]
    }
  }

  if (attrs) {
    for (let key in attrs) {
      node.setAttribute(key, attrs[key]);
    }
  }

  for (let key of Object.keys(rest)) {
    if (rest[key]) {
      if (typeof rest[key] === 'function') {
        node[key.toLowerCase()] = rest[key];
      } else {
        node.setAttribute(key, rest[key]);
      }
    }
  }

  return node;
};

