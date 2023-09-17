import axios from 'axios'
import { fetchProfileData } from './fetchProfileData'
import { Currency } from '5_entities/Currency'
import { Country } from '5_entities/Country'
import { TestAsyncThunk } from '6_shared/lib/tests/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

const data = {
    first: 'Денис',
    lastname: 'Ерохин',
    age: 31,
    currency: Currency.USD,
    country: Country.UK,
    city: 'Орел',
    username: 'admin',
}

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
