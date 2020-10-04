const DateInput = require("../../lib/dom/DateInput");

test('DateInput', () => {
    var el = DateInput.default({})
    const elResult = "<input type=\"date\">"
    expect(el.outerHTML).toBe(elResult);
});