const Footer = require("../../lib/dom/Footer");

test('Footer', () => {
    var el = Footer.default({})
    const elResult = "<footer></footer>"
    expect(el.outerHTML).toBe(elResult);
});