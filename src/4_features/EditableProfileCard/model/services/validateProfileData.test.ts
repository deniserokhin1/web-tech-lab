import { Country } from '@/5_entities/Country'
import { Currency } from '@/5_entities/Currency'
import { type IProfile } from '@/5_entities/Profile'

import { ValidateProfileErrors } from '../const/validateErrors'

import { validateProfileData } from './validateProfileData'

// jest.mock('axios')

const data: IProfile = {
    first: 'Денис',
    lastname: 'Ерохин',
    age: 32,
    currency: Currency.USD,
    country: Country.RU,
    city: 'Орел',
    username: 'admin',
    avatar: 'avatar',
}

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })
    test('without first and last name', () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA])
    })
    test('without age', () => {
        const result = validateProfileData({ ...data, age: 0 })
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE])
    })
    test('empty data', () => {
        const result = validateProfileData({})
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ])
    })
})
