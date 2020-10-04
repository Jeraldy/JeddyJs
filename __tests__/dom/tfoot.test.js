const Tfoot = require("../../lib/dom/Tfoot");

test('Tfoot', () => {
    var el = Tfoot.default({})
    const elResult = "<Tfoot></Tfoot>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});