const P = require("../../lib/dom/P");

test('P', () => {
    var el = P.default({})
    const elResult = "<P></P>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});