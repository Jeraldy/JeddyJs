export default (selectedItem) => {
    return [
        {
            label: "Content Sectioning",
            children: [
                {
                    label: "Address",
                    onClick: () => selectedItem(
                        "Address",
                        "The HTML <address> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization."
                    ),
                },
                {
                    label: "Article",
                    onClick: () => selectedItem(
                        "Article",
                        "The HTML <article> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication)."
                    ),
                },
                {
                    label: "Aside",
                    onClick: () => selectedItem(
                        "Aside",
                        "The HTML <aside> element represents a portion of a document whose content is only indirectly related to the document's main content."
                    ),
                },
                {
                    label: "Footer",
                    onClick: () => selectedItem(
                        "Footer",
                        "The HTML <footer> element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents."
                    ),
                },
                {
                    label: "Header",
                    onClick: () => selectedItem(
                        "Header",
                        "	The HTML <header> element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements."
                    ),
                },
                {
                    label: "H1-6",
                    onClick: () => selectedItem(
                        "H1",
                        "The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest."
                    ),
                },
                {
                    label: "HGroup",
                    onClick: () => selectedItem(
                        "HGroup",
                        "The HTML <hgroup> element represents a multi-level heading for a section of a document. It groups a set of <h1>–<h6> elements."
                    ),
                },
                {
                    label: "Main",
                    onClick: () => selectedItem(
                        "Main",
                        "	The HTML <main> element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application."
                    ),
                },
                {
                    label: "Nav",
                    onClick: () => selectedItem(
                        "Nav",
                        "The HTML <nav> element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes."
                    ),
                },
                ,
                {
                    label: "Section",
                    onClick: () => selectedItem(
                        "Section",
                        "The HTML <section> element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document."
                    ),
                },
            ]
        },
        {
            label: "Text Content",
            children: [
                {
                    label: "BlockQuote",
                    onClick: () => selectedItem(
                        "BlockQuote",
                        "The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element."
                    ),
                },
                {
                    label: "Dd",
                    onClick: () => selectedItem(
                        "Dd",
                        "The HTML <dd> element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>)."
                    ),
                }, {
                    label: "Div",
                    onClick: () => selectedItem(
                        "Div",
                        "The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS."
                    ),
                }, {
                    label: "Dl",
                    onClick: () => selectedItem(
                        "Dl",
                        "The HTML <dl> element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs)."
                    ),
                }, {
                    label: "Dt",
                    onClick: () => selectedItem(
                        "Dt",
                        "The HTML <dt> element specifies a term in a description or definition list, and as such must be used inside a <dl> element."
                    ),
                }, {
                    label: "FigCaption",
                    onClick: () => selectedItem(
                        "FigCaption",
                        "The HTML <figcaption> or Figure Caption element represents a caption or legend describing the rest of the contents of its parent <figure> element."
                    ),
                }, {
                    label: "Figure",
                    onClick: () => selectedItem(
                        "Figure",
                        "The HTML <figure> (Figure With Optional Caption) element represents self-contained content, potentially with an optional caption, which is specified using the (<figcaption>) element."
                    ),
                }, {
                    label: "Hr",
                    onClick: () => selectedItem(
                        "Hr",
                        "The HTML <hr> element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section."
                    ),
                }, {
                    label: "Li",
                    onClick: () => selectedItem(
                        "Li",
                        "The HTML <li> element is used to represent an item in a list."
                    ),
                }, {
                    label: "Ol",
                    onClick: () => selectedItem(
                        "Ol",
                        "The HTML <ol> element represents an ordered list of items — typically rendered as a numbered list."
                    ),
                }, {
                    label: "P",
                    onClick: () => selectedItem(
                        "P",
                        "The HTML <p> element represents a paragraph."),
                }, {
                    label: "Pre",
                    onClick: () => selectedItem(
                        "Pre",
                        "	The HTML <pre> element represents preformatted text which is to be presented exactly as written in the HTML file."),
                }, {
                    label: "Ul",
                    onClick: () => selectedItem(
                        "Ul",
                        "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list."),
                },
            ]
        },
        {
            label: "Inline Text Semantics",
            children: [
                {
                    label: "A",
                    onClick: () => selectedItem(
                        "A",
                        "The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."
                    ),
                },
                {
                    label: "Abbr",
                    onClick: () => selectedItem(
                        "Abbr",
                        "The HTML Abbreviation element (<abbr>) represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation."),
                },
                {
                    label: "B",
                    onClick: () => selectedItem(
                        "B",
                        "The HTML Bring Attention To element (<b>) is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance."),
                },
                {
                    label: "Bdi",
                    onClick: () => selectedItem(
                        "Bdi",
                        "The HTML Bidirectional Isolate element (<bdi>)  tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text."),
                },
                {
                    label: "Bdo",
                    onClick: () => selectedItem(
                        "Bdo",
                        "The HTML Bidirectional Text Override element (<bdo>) overrides the current directionality of text, so that the text within is rendered in a different direction."),
                },
                {
                    label: "Br",
                    onClick: () => selectedItem(
                        "Br",
                        "	The HTML <br> element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant."),
                },
                {
                    label: "Cite",
                    onClick: () => selectedItem(
                        "Cite",
                        "The HTML Citation element (<cite>) is used to describe a reference to a cited creative work, and must include the title of that work."),
                },
                {
                    label: "Code",
                    onClick: () => selectedItem(
                        "Code",
                        "	The HTML <code> element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code."),
                },
                {
                    label: "Data",
                    onClick: () => selectedItem(
                        "Data",
                        "The HTML <data> element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used."),
                },
                {
                    label: "Dfn",
                    onClick: () => selectedItem(
                        "Dfn",
                        "The HTML Definition element (<dfn>) is used to indicate the term being defined within the context of a definition phrase or sentence."
                    ),
                },
                {
                    label: "Em",
                    onClick: () => selectedItem(
                        "Em",
                        "The HTML <em> element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis."
                    ),
                },
                {
                    label: "I",
                    onClick: () => selectedItem(
                        "I",
                        "The HTML Idiomatic Text element (<i>) represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others."
                    ),
                },
                {
                    label: "Kbd",
                    onClick: () => selectedItem(
                        "Kbd",
                        "The HTML Keyboard Input element (<kbd>) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device."),
                },
                {
                    label: "Mark",
                    onClick: () => selectedItem(
                        "Mark",
                        "The HTML Mark Text element (<mark>) represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context."
                    ),
                },
                {
                    label: "Q",
                    onClick: () => selectedItem(
                        "Q",
                        "The HTML <q> element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks."
                    ),
                },
                {
                    label: "Rb",
                    onClick: () => selectedItem(
                        "Rb",
                        "The HTML Ruby Base (<rb>) element is used to delimit the base text component of a  <ruby> annotation, i.e. the text that is being annotated."
                    ),
                },
                {
                    label: "Rp",
                    onClick: () => selectedItem(
                        "Rp",
                        "The HTML Ruby Fallback Parenthesis (<rp>) element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element."
                    ),
                },
                {
                    label: "Rt",
                    onClick: () => selectedItem(
                        "Rt",
                        "The HTML Ruby Text (<rt>) element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element."),
                },
                {
                    label: "Rtc",
                    onClick: () => selectedItem(
                        "Rtc",
                        "The HTML Ruby Text Container (<rtc>) element embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element. <rb> elements can have both pronunciation (<rt>) and semantic (<rtc>) annotations."
                    ),
                },
                {
                    label: "Ruby",
                    onClick: () => selectedItem(
                        "Ruby",
                        "	The HTML <ruby> element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common."),
                },
                {
                    label: "S",
                    onClick: () => selectedItem(
                        "S",
                        "The HTML <s> element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate."),
                },
                {
                    label: "Samp",
                    onClick: () => selectedItem(
                        "Samp",
                        "The HTML Sample Element (<samp>) is used to enclose inline text which represents sample (or quoted) output from a computer program."),
                },
                {
                    label: "Small",
                    onClick: () => selectedItem(
                        "Small",
                        "	The HTML <small> element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small."),
                },
                {
                    label: "Span",
                    onClick: () => selectedItem(
                        "Span",
                        "The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang."),
                },
                {
                    label: "Strong",
                    onClick: () => selectedItem(
                        "Strong",
                        "	The HTML Strong Importance Element (<strong>) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type."),
                },
                {
                    label: "Sub",
                    onClick: () => selectedItem(
                        "Sub",
                        "The HTML Subscript element (<sub>) specifies inline text which should be displayed as subscript for solely typographical reasons."),
                },
                {
                    label: "Sup",
                    onClick: () => selectedItem(
                        "Sup",
                        "The HTML Superscript element (<sup>) specifies inline text which is to be displayed as superscript for solely typographical reasons."),
                },
                {
                    label: "Time",
                    onClick: () => selectedItem(
                        "Time",
                        "The HTML <time> element represents a specific period in time."
                    ),
                },
                {
                    label: "U",
                    onClick: () => selectedItem(
                        "U",
                        "The HTML Unarticulated Annotation element (<u>) represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation."
                    ),
                },
                {
                    label: "Var",
                    onClick: () => selectedItem(
                        "Var",
                        "The HTML Variable element (<var>) represents the name of a variable in a mathematical expression or a programming context."),
                },
                {
                    label: "Wbr",
                    onClick: () => selectedItem(
                        "Wbr",
                        "The HTML <wbr> element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location."),
                }
            ]
        },
        {
            label: "Image and Multimedia",
            children: [
                {
                    label: "Area",
                    onClick: () => selectedItem(
                        "Area",
                        "The HTML <area> tag defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext link."
                    ),
                },
                {
                    label: "Audio",
                    onClick: () => selectedItem(
                        "Audio",
                        "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."),
                },
                {
                    label: "Img",
                    onClick: () => selectedItem("Img"),
                },
                {
                    label: "Map",
                    onClick: () => selectedItem(
                        "Map",
                        "The HTML <map> element is used with <area> elements to define an image map (a clickable link area)."
                    ),
                },
                {
                    label: "Track",
                    onClick: () => selectedItem(
                        "Track",
                        "The HTML <track> element is used as a child of the media elements, <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles."
                    ),
                },
                {
                    label: "Video",
                    onClick: () => selectedItem(
                        "Video",
                        "The HTML Video element (<video>) embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience."),
                }
            ]
        },
        {
            label: "Embedded Content",
            children: [
                {
                    label: "Embed",
                    onClick: () => selectedItem(
                        "Embed",
                        "The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in."
                    ),
                },
                {
                    label: "IFrame",
                    onClick: () => selectedItem(
                        "IFrame",
                        "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one."
                    ),
                },
                {
                    label: "Object",
                    onClick: () => selectedItem(
                        "Object",
                        "The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin."
                    ),
                },
                {
                    label: "Param",
                    onClick: () => selectedItem(
                        "Param",
                        "The HTML <param> element defines parameters for an <object> element."
                    ),
                },
                {
                    label: "Picture",
                    onClick: () => selectedItem(
                        "Picture",
                        "The HTML <picture> element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios."),
                },
                {
                    label: "Source",
                    onClick: () => selectedItem(
                        "Source",
                        "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element."
                    ),
                }
            ]
        },
        {
            label: "Scripting",
            children: [
                {
                    label: "Canvas",
                    onClick: () => selectedItem("Canvas"),
                },
                {
                    label: "NoScript",
                    onClick: () => selectedItem("NoScript"),
                },
                {
                    label: "Script",
                    onClick: () => selectedItem("Script"),
                }
            ]
        },
        {
            label: "Demarcating Edits",
            children: [
                {
                    label: "Del",
                    onClick: () => selectedItem("Del"),
                },
                {
                    label: "Ins",
                    onClick: () => selectedItem("Ins"),
                }
            ]
        },
        {
            label: "Table Content",
            children: [
                {
                    label: "Caption",
                    onClick: () => selectedItem(
                        "Caption",
                        "The HTML <caption> element specifies the caption (or title) of a table."),
                },
                {
                    label: "Col",
                    onClick: () => selectedItem(
                        "Col",
                        "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element."
                    ),
                },
                {
                    label: "ColGroup",
                    onClick: () => selectedItem(
                        "ColGroup",
                        "The HTML <colgroup> element defines a group of columns within a table."
                    ),
                },
                {
                    label: "Table",
                    onClick: () => selectedItem(
                        "Table",
                        "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data."
                    ),
                },
                {
                    label: "TBody",
                    onClick: () => selectedItem(
                        "TBody",
                        "The HTML Table Body element (<tbody>) encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>)."
                    ),
                },
                {
                    label: "Td",
                    onClick: () => selectedItem(
                        "Td",
                        "The HTML <td> element defines a cell of a table that contains data. It participates in the table model."
                    ),
                },
                {
                    label: "TFoot",
                    onClick: () => selectedItem(
                        "TFoot",
                        "The HTML <tfoot> element defines a set of rows summarizing the columns of the table."
                    ),
                },
                {
                    label: "Th",
                    onClick: () => selectedItem(
                        "Th",
                        "The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes."
                    ),
                },
                {
                    label: "THead",
                    onClick: () => selectedItem(
                        "THead",
                        "The HTML <thead> element defines a set of rows defining the head of the columns of the table."
                    ),
                },
                {
                    label: "Tr",
                    onClick: () => selectedItem(
                        "Tr",
                        "The HTML <tr> element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements."
                    ),
                },
            ]
        },
        {
            label: "Forms",
            children: [
                {
                    label: "Button",
                    onClick: () => selectedItem(
                        "Button",
                        "The HTML <button> element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality."
                    ),
                },
                {
                    label: "DataList",
                    onClick: () => selectedItem(
                        "DataList",
                        "The HTML <datalist> element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls."),
                },
                {
                    label: "FieldSet",
                    onClick: () => selectedItem(
                        "FieldSet",
                        "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."),
                },
                {
                    label: "Form",
                    onClick: () => selectedItem(
                        "Form",
                        "The HTML <form> element represents a document section containing interactive controls for submitting information."),
                },
                {
                    label: "Input",
                    onClick: () => selectedItem(
                        "Input",
                        "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent."
                    ),
                },
                {
                    label: "Label",
                    onClick: () => selectedItem(
                        "Label",
                        "The HTML <label> element represents a caption for an item in a user interface."
                    ),
                },
                {
                    label: "Legend",
                    onClick: () => selectedItem(
                        "Legend",
                        "The HTML <legend> element represents a caption for the content of its parent <fieldset>."
                    ),
                },
                {
                    label: "Meter",
                    onClick: () => selectedItem(
                        "Meter",
                        "The HTML <meter> element represents either a scalar value within a known range or a fractional value."
                    ),
                },
                {
                    label: "OptGroup",
                    onClick: () => selectedItem(
                        "OptGroup",
                        "The HTML <optgroup> element creates a grouping of options within a <select> element."
                    ),
                },
                {
                    label: "Option",
                    onClick: () => selectedItem(
                        "Option",
                        "	The HTML <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document."
                    ),
                },
                {
                    label: "Output",
                    onClick: () => selectedItem(
                        "Output",
                        "The HTML Output element (<output>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action."
                    ),
                },
                {
                    label: "Progress",
                    onClick: () => selectedItem(
                        "Progress",
                        "The HTML <progress> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
                    ),
                },
                {
                    label: "Select",
                    onClick: () => selectedItem(
                        "Select",
                        "The HTML <select> element represents a control that provides a menu of options"
                    ),
                },
                {
                    label: "TextArea",
                    onClick: () => selectedItem(
                        "TextArea",
                        "The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."
                    ),
                }
            ]
        },
        {
            label: "Interactive Elements",
            children: [
                {
                    label: "Details",
                    onClick: () => selectedItem(
                        "Details",
                        `The HTML Details Element (<details>) creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.`
                    ),
                },
                {
                    label: "Dialog",
                    onClick: () => selectedItem(
                        "Dialog",
                        "The HTML <dialog> element represents a dialog box or other interactive component, such as a dismissable alert, inspector, or subwindow."),
                },
                {
                    label: "Menu",
                    onClick: () => selectedItem(
                        "Menu",
                        "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked."
                    ),
                },
                {
                    label: "Summary",
                    onClick: () => selectedItem(
                        "Summary",
                        "The HTML Disclosure Summary element (<summary>) element specifies a summary, caption, or legend for a <details> element's disclosure box."
                    ),
                }
            ]
        },
        {
            label: "Web Components",
            children: [
                {
                    label: "Slot",
                    onClick: () => selectedItem(
                        "Slot",
                        "The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together."
                    ),
                },
                {
                    label: "Template",
                    onClick: () => selectedItem(
                        "Template",
                        "The HTML Content Template (<template>) element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript."
                    ),
                },
            ]
        }
    ]
}