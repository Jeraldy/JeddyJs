const TextView = require("../../lib/dom/TextView");

test('TextView', () => {
    var el = TextView.default('hello')
    const elResult = "hello"
    expect(el.data).toBe(elResult);
});