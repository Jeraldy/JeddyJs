const Ul = require("../../lib/dom/Ul");

test('Ul', () => {
    var el = Ul.default({})
    const elResult = "<Ul></Ul>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});