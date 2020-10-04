const Strong = require("../../lib/dom/Strong");

test('Strong', () => {
    var el = Strong.default({})
    const elResult = "<Strong></Strong>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});