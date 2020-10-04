const Label = require("../../lib/dom/Label");

test('Label', () => {
    var el = Label.default({})
    const elResult = "<Label></Label>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});