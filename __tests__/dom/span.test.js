const Span = require("../../lib/dom/Span");

test('Span', () => {
    var el = Span.default({})
    const elResult = "<Span></Span>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});