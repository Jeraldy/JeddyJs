const Th = require("../../lib/dom/Th");

test('Th', () => {
    var el = Th.default({})
    const elResult = "<Th></Th>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});