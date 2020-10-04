const Button = require("../../lib/dom/Button");

test('Button', () => {
    var el = Button.default({
        style: { color: 'red' },
        children: ['First child']
    })
    const elResult = "<button style=\"color: red;\">First child</button>"
    expect(el.outerHTML).toBe(elResult);
});