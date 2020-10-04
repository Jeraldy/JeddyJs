const H4 = require("../../lib/dom/H4");

test('H4', () => {
    var el = H4.default({})
    const elResult = "<H4></H4>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});