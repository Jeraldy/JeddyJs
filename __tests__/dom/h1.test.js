const H1 = require("../../lib/dom/H1");

test('H1', () => {
    var el = H1.default({})
    const elResult = "<H1></H1>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});