const NumberInput = require("../../lib/dom/NumberInput");

test('NumberInput', () => {
    var el = NumberInput.default({})
    const elResult = "<input type=\"number\">"
    expect(el.outerHTML).toBe(elResult);
});