const Header = require("../../lib/dom/Header");

test('Header', () => {
    var el = Header.default({})
    const elResult = "<Header></Header>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});