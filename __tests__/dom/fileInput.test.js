const FileInput = require("../../lib/dom/FileInput");

test('FileInput', () => {
    var el = FileInput.default({})
    const elResult = "<input type=\"file\">"
    expect(el.outerHTML).toBe(elResult);
});