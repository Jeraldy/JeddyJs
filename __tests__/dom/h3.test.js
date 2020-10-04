const H3 = require("../../lib/dom/H3");

test('H3', () => {
    var el = H3.default({})
    const elResult = "<H3></H3>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});