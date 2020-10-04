const Option = require("../../lib/dom/Option");

test('Option', () => {
    var el = Option.default({})
    const elResult = "<Option></Option>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});