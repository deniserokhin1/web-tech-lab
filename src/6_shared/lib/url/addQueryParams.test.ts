import { getQueryParams } from './addQueryParams'

describe('getQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({ test: 'value' })
        expect(params).toBe('?test=value')
    })
    test('test with multiple params', () => {
        const params = getQueryParams({ first: 'value', second: 'value-2' })
        expect(params).toBe('?first=value&second=value-2')
    })
    test('test with empty param', () => {
        const params = getQueryParams({ fisrt: '', second: 'value-2' })
        expect(params).toBe('?second=value-2')
    })
})
