const Svg = require("../../lib/dom/Svg");

test('Svg', () => {
    var el = Svg.default({})
    const elResult = "<Svg></Svg>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});