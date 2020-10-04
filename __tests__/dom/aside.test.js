const A = require("../../lib/dom/Aside");

test('Aside', () => {
    var el = A.default({
        style: { color: 'red' },
        children: ['First child']
    })
    const elResult = "<aside style=\"color: red;\">First child</aside>"
    expect(el.outerHTML).toBe(elResult);
});