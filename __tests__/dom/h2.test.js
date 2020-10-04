const H2 = require("../../lib/dom/H2");

test('H2', () => {
    var el = H2.default({})
    const elResult = "<H2></H2>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});