import { type IProfile } from '@/5_entities/Profile'
import { type ValidateProfileErrors } from '../const/validateErrors'

export interface EditableProfileCardSchema {
    data?: IProfile
    form?: IProfile
    isLoading: boolean
    error?: string
    readonly?: boolean
    validateErrors?: ValidateProfileErrors[]
}
