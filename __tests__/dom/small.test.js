const Small = require("../../lib/dom/Small");

test('Small', () => {
    var el = Small.default({})
    const elResult = "<Small></Small>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});