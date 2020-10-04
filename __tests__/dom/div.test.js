const Div = require("../../lib/dom/Div");

test('Div', () => {
    var el = Div.default({})
    const elResult = "<div></div>"
    expect(el.outerHTML).toBe(elResult);
});