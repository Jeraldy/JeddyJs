const TBody = require("../../lib/dom/TBody");

test('TBody', () => {
    var el = TBody.default({})
    const elResult = "<TBody></TBody>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});