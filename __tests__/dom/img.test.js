const Img = require("../../lib/dom/Img");

test('Img', () => {
    var el = Img.default({})
    const elResult = "<Img>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});