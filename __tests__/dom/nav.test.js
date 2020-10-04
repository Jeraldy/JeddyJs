const Nav = require("../../lib/dom/Nav");

test('Nav', () => {
    var el = Nav.default({})
    const elResult = "<Nav></Nav>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});