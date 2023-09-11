import { type Country } from '5_entities/Country'
import { type Currency } from '5_entities/Currency'

export interface IProfile {
    id?: string | number
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: IProfile
    form?: IProfile
    isLoading: boolean
    error?: string
    readonly?: boolean
    validateErrors?: ValidateProfileErrors[]
}

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}
