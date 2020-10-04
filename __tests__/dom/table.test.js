const Table = require("../../lib/dom/Table");

test('Table', () => {
    var el = Table.default({})
    const elResult = "<Table></Table>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});