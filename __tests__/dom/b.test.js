const B = require("../../lib/dom/B");

test('B', () => {
    var el = B.default({
        style: { color: 'red' },
        children: ['First child']
    })
    const elResult = "<b style=\"color: red;\">First child</b>"
    expect(el.outerHTML).toBe(elResult);
});