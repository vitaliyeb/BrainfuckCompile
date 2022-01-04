import interpret from "./interpret";



describe('Interpret function', () => {
    it.each([
        ['+++', []],
        ['++ +++.', [5]],
        ['+++.', [3]]
    ])('+ operator', (input, expected) => {
        expect(interpret(input, '')).toEqual({result: expected, error: null, ms: 0})
    })

    it.each([
        ['--', []],
        ['-- ---.', [-5]],
        ['---.', [-3]]
    ])('- operator', (input, expected) => {
        expect(interpret(input, '')).toEqual({result: expected, error: null, ms: 0})
    })

    it.each([
        ['++>.', [0]],
        ['+++>++.', [2]],
    ])('> operator', (input, expected) => {
        expect(interpret(input, '')).toEqual({result: expected, error: null, ms: 0})
    })

    it.each([
        ['>++<.', [0]],
        ['+++>++<.', [3]],
    ])('< operator', (input, expected) => {
        expect(interpret(input, '')).toEqual({result: expected, error: null, ms: 0})
    })
})