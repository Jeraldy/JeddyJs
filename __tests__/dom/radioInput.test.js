const RadioInput = require("../../lib/dom/RadioInput");

test('RadioInput', () => {
    var el = RadioInput.default({})
    const elResult = "<input type=\"radio\">"
    expect(el.outerHTML).toBe(elResult);
});