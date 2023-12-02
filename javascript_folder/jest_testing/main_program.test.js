const concatstr = require('./concatstr');

test('returns the concat of two strings', () => {
    expect(concatstr("hello ", "world")).toBe("hello world");
})
