const Ol = require("../../lib/dom/Ol");

test('Ol', () => {
    var el = Ol.default({})
    const elResult = "<Ol></Ol>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});