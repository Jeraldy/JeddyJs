const Style = require("../../lib/dom/Style");

test('Style', () => {
    var el = Style.default({})
    const elResult = "<Style></Style>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});