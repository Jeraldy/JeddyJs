const Li = require("../../lib/dom/Li");

test('Li', () => {
    var el = Li.default({})
    const elResult = "<Li></Li>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});