const {ageText} = require('./app');

test('should output null', () => {
    const text = ageText('', null);
    expect(text).toBe(' is null years old');
})

test('should output name and age', () => {
    const text = ageText('Luke', 20);
    expect(text).toBe('Luke is 20 years old');
});