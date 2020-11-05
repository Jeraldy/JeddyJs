import Div from "jeddy/dom/Div";

export default (html) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html").body
    return Div({ children: [...doc.childNodes] })
}