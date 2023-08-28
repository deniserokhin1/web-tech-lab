import { classNames } from './classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2 class3'
        expect(classNames('someClass', {}, ['class1', 'class2', 'class3'])).toBe(expected)
    })

    test('with mods', () => {
        const expected = 'someClass hover class1 class2 class3'
        expect(
            classNames('someClass', { hover: true, isScroll: false }, [
                'class1',
                'class2',
                'class3',
            ]),
        ).toBe(expected)
    })

    test('with empty first param', () => {
        const expected = 'hover class1 class2 class3'
        expect(
            classNames('', { hover: true, isScroll: false }, [
                'class1',
                'class2',
                'class3',
            ]),
        ).toBe(expected)
    })
})
