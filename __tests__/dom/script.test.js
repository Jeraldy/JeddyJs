const Script = require("../../lib/dom/Script");

test('Script', () => {
    var el = Script.default({})
    const elResult = "<Script></Script>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});