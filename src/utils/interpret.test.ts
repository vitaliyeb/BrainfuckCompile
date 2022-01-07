import interpret from "./interpret";


const weedOutMs = ({error, result}: ReturnType<typeof interpret>) => ({error, result});

describe('Interpret function', () => {
    it.each([
        ['+++', []],
        ['++ +++.', [5]],
        ['+++.', [3]]
    ])('+ operator', (input, expected) => {
        expect(weedOutMs(interpret(input, ''))).toEqual({result: expected, error: null})
    })

    it.each([
        ['--', []],
        ['-- ---.', [-5]],
        ['---.', [-3]]
    ])('- operator', (input, expected) => {
        expect(weedOutMs(interpret(input, ''))).toEqual({result: expected, error: null})
    })

    it.each([
        ['++>.', [0]],
        ['+++>++.', [2]],
    ])('> operator', (input, expected) => {
        expect(weedOutMs(interpret(input, ''))).toEqual({result: expected, error: null})
    })

    it.each([
        ['>++<.', [0]],
        ['+++>++<.', [3]],
    ])('< operator', (input, expected) => {
        expect(weedOutMs(interpret(input, ''))).toEqual({result: expected, error: null})
    })

    it.each([
        [',.', '3',[3]],
        [',.', '', [0]],
    ])(', operator', (code, input, expected) => {
        expect(weedOutMs(interpret(code, input))).toEqual({result: expected, error: null})
    })

    it.each([
        ['+++[->+<]>.', {result: [3], error: null}],
        ['+[]', {result: [], error: 'InternalError: infinity loop'}],
        ['+[', {result: [], error: `Uncaught SyntaxError: expected closing token ']'`}],
        ['+]', {result: [], error: `Uncaught SyntaxError: expected closing token '['`}]
    ])('[] operator', (input, expected) => {
        expect(weedOutMs(interpret(input, ''))).toEqual(expected)
    })
})