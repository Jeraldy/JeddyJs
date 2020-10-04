const Sub = require("../../lib/dom/Sub");

test('Sub', () => {
    var el = Sub.default({})
    const elResult = "<Sub></Sub>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});