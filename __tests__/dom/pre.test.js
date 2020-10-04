const Pre = require("../../lib/dom/Pre");

test('Pre', () => {
    var el = Pre.default({})
    const elResult = "<Pre></Pre>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});