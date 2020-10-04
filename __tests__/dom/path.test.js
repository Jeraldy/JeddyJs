const Path = require("../../lib/dom/Path");

test('Path', () => {
    var el = Path.default({})
    const elResult = "<Path></Path>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});