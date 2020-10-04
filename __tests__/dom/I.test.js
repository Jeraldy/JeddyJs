const I = require("../../lib/dom/I");

test('I', () => {
    var el = I.default({})
    const elResult = "<I></I>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});