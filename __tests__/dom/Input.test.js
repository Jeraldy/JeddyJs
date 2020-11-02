const TextInput = require("../../lib/dom/Input");

test('TextInput', () => {
    var el = TextInput.default({type: "text"})
    const elResult = "<input type=\"text\">"
    expect(el.outerHTML).toBe(elResult);
});