const Form = require("../../lib/dom/Form");

test('Form', () => {
    var el = Form.default({})
    const elResult = "<form></form>"
    expect(el.outerHTML).toBe(elResult);
});