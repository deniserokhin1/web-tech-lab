import { type IProfile } from '@/5_entities/Profile'
import { ValidateProfileErrors } from '../const/validateErrors'

export const validateProfileData = (profile?: IProfile): ValidateProfileErrors[] => {
    if (!profile) return [ValidateProfileErrors.NO_DATA]

    const { first, lastname, age, country, city, username, avatar } = profile
    const errors: ValidateProfileErrors[] = []

    if (!first || !lastname || !city || !username || !avatar) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA)
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE)
    }

    if (!country) {
        errors.push(ValidateProfileErrors.INCORRECT_COUNTRY)
    }

    return errors
}
