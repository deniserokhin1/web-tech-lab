import axios from 'axios'
import { Currency } from '5_entities/Currency'
import { Country } from '5_entities/Country'
import { TestAsyncThunk } from '6_shared/lib/tests/TestAsyncThunk'
import { updateProfileData } from './updateProfileData'
import { type IProfile } from '5_entities/Profile'
import { ValidateProfileErrors } from '../types/EditableProfileCardSchema'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

const data: IProfile = {
    first: 'Денис',
    lastname: 'Ерохин',
    age: 32,
    currency: Currency.USD,
    country: Country.RU,
    city: 'Орел',
    username: 'admin',
    avatar: 'avatar',
    id: '1',
}

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(mockedAxios.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, first: '' },
            },
        })
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA])
    })
})
