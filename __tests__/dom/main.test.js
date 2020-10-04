const Main = require("../../lib/dom/Main");

test('Main', () => {
    var el = Main.default({})
    const elResult = "<Main></Main>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});