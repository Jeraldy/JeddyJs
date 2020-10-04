const H5 = require("../../lib/dom/H5");

test('H5', () => {
    var el = H5.default({})
    const elResult = "<H5></H5>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});