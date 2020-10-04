const IFrame = require("../../lib/dom/IFrame");

test('IFrame', () => {
    var el = IFrame.default({})
    const elResult = "<IFrame></IFrame>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});