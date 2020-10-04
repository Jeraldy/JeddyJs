const Circle = require("../../lib/dom/Circle");

test('Circle', () => {
    var el = Circle.default({})
    const elResult = "<circle></circle>"
    expect(el.outerHTML).toBe(elResult);
});