const Br = require("../../lib/dom/Br");

test('Br', () => {
    var el = Br.default()
    const elResult = "<br>"
    expect(el.outerHTML).toBe(elResult);
});