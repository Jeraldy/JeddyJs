const Select = require("../../lib/dom/Select");

test('Select', () => {
    var el = Select.default({})
    const elResult = "<Select></Select>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});