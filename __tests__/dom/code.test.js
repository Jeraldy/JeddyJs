const Code = require("../../lib/dom/Code");

test('Code', () => {
    var el = Code.default({})
    const elResult = "<code></code>"
    expect(el.outerHTML).toBe(elResult);
});