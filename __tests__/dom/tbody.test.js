const TBody = require("../../lib/dom/Tbody");

test('TBody', () => {
    var el = TBody.default({})
    const elResult = "<TBody></TBody>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});