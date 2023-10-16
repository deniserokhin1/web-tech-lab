import { type Country } from '@/5_entities/Country'
import { type Currency } from '@/5_entities/Currency'

export interface IProfile {
    id?: string
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}
