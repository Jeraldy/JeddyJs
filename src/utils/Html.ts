export default (html: string) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html").body
    return [...doc.childNodes]
}