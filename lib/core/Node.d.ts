/**
 * Builds a real DOM object
 * @param  {object} props     Node props eg. style, id,...etc
 * @param  {string} tag       HTMLTag eg. div, button, input,...etc
 * @return {HTMLElement|Text}
 */
declare const Node: (props: object, tag: string) => HTMLElement | Text;
export default Node;
