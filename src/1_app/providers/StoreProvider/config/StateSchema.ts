import { type LoginSchema } from '4_features/AuthByUserName'
import { type UserSchema } from '5_entities/User'

export interface StateSchema {
    user: UserSchema
    login?: LoginSchema
}
