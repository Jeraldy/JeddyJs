const A = require("../../lib/dom/A");

test('A', () => {
    var el = A.default({
        style: { color: 'red' },
        children: ['First child']
    })
    const elResult = "<a style=\"color: red;\">First child</a>"
    expect(el.outerHTML).toBe(elResult);
});