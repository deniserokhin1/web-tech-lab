import { type IProfile } from '5_entities/Profile'

export interface EditableProfileCardSchema {
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
