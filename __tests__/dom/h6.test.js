const H6 = require("../../lib/dom/H6");

test('H6', () => {
    var el = H6.default({})
    const elResult = "<H6></H6>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});