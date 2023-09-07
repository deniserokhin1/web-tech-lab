import { type Country, type Currency } from '6_shared/const/common'

export interface IProfile {
    id: string | number
    first: string
    lastname: string
    age: number
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export interface ProfileSchema {
    data?: IProfile
    isLoading: boolean
    error?: string
    readonly?: boolean
}