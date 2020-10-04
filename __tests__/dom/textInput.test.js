const TextInput = require("../../lib/dom/TextInput");

test('TextInput', () => {
    var el = TextInput.default({})
    const elResult = "<input type=\"text\">"
    expect(el.outerHTML).toBe(elResult);
});