const PasswordInput = require("../../lib/dom/PasswordInput");

test('PasswordInput', () => {
    var el = PasswordInput.default({})
    const elResult = "<input type=\"password\">"
    expect(el.outerHTML).toBe(elResult);
});