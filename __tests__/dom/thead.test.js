const Thead = require("../../lib/dom/Thead");

test('Thead', () => {
    var el = Thead.default({})
    const elResult = "<Thead></Thead>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});