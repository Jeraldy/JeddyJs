const createNodeEl = require("../../lib/core/Node");

test('createNodeEl', () => {
    var el = createNodeEl.default({
        style: { color: 'red' },
        children: ['First child']
    }, 'div')
    const elResult = "<div style=\"color: red;\">First child</div>"
    expect(el.outerHTML).toBe(elResult);
});