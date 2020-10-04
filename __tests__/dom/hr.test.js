const Hr = require("../../lib/dom/Hr");

test('Hr', () => {
    var el = Hr.default({})
    const elResult = "<Hr>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});