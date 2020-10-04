const CheckBoxInput = require("../../lib/dom/CheckBoxInput");

test('CheckBoxInput', () => {
    var el = CheckBoxInput.default({})
    const elResult = "<input type=\"checkbox\">"
    expect(el.outerHTML).toBe(elResult);
});