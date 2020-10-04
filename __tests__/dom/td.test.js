const Td = require("../../lib/dom/Td");

test('Td', () => {
    var el = Td.default({})
    const elResult = "<Td></Td>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});