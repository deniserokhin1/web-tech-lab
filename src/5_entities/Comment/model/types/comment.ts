import { type IUser } from '@/5_entities/User'

export interface IComment {
    id: string
    text: string
    user: IUser
}
