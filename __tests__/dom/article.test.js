const A = require("../../lib/dom/Article");

test('Article', () => {
    var el = A.default({
        style: { color: 'red' },
        children: ['First child']
    })
    const elResult = "<article style=\"color: red;\">First child</article>"
    expect(el.outerHTML).toBe(elResult);
});