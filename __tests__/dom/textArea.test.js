const TextArea = require("../../lib/dom/TextArea");

test('TextArea', () => {
    var el = TextArea.default({})
    const elResult = "<TextArea></TextArea>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});