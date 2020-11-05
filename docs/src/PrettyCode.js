import Prism from 'prismjs';
import Code from 'jeddy/dom/Code';
import Pre from 'jeddy/dom/Pre';

export default (code,lang="javascript") => {
    let html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    if(lang != "javascript"){
        html = Prism.highlight(code, Prism.languages.html, 'html')
    }
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html").body
    return Pre({
        children: [
            Code({ children: [...doc.childNodes] })
        ],
        style: {
            backgroundColor: "#F8F8F8",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            borderLeft:"4px solid #ccc"
        }
    })
}

