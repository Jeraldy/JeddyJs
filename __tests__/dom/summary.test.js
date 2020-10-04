const Summary = require("../../lib/dom/Summary");

test('Summary', () => {
    var el = Summary.default({})
    const elResult = "<Summary></Summary>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});