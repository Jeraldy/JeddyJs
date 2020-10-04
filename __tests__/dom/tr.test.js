const Tr = require("../../lib/dom/Tr");

test('Tr', () => {
    var el = Tr.default({})
    const elResult = "<Tr></Tr>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});