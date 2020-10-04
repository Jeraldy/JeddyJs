const Section = require("../../lib/dom/Section");

test('Section', () => {
    var el = Section.default({})
    const elResult = "<Section></Section>"
    expect(el.outerHTML).toBe(elResult.toLowerCase());
});