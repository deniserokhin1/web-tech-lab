import { Country } from '5_entities/Country'
import { Currency } from '5_entities/Currency'
import { updateProfileData } from '../services/updateProfileData'
import { type IProfile } from '5_entities/Profile'
import { profileActions, profileReducer } from './EditableProfileCardSlice'
import { type EditableProfileCardSchema } from '../types/EditableProfileCardSchema'
import { ValidateProfileErrors } from '../const/validateErrors'

const data: IProfile = {
    username: 'admin',
    age: 22,
    country: Country.RU,
    lastname: 'Erokhin',
    first: 'Denis',
    city: 'Orel',
    currency: Currency.USD,
    avatar: 'avatar',
}

describe('profileSlice', () => {
    const { cancelEdit, setReadOnly, updateProfile } = profileActions
    test('test set readonly', () => {
        const state: DeepPartial<EditableProfileCardSchema> = { readonly: false }
        expect(
            profileReducer(state as EditableProfileCardSchema, setReadOnly(true)),
        ).toEqual({
            readonly: true,
        })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            data,
            form: { username: '' },
        }

        expect(profileReducer(state as EditableProfileCardSchema, cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        })
    })

    test('test update profile', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            form: { username: 'Den' },
        }

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
                updateProfile({
                    username: 'Denis',
                }),
            ),
        ).toEqual({
            form: { username: 'Denis' },
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        }

        expect(
            profileReducer(state as EditableProfileCardSchema, updateProfileData.pending),
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        })
    })

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<EditableProfileCardSchema> = {
            isLoading: true,
        }

        expect(
            profileReducer(
                state as EditableProfileCardSchema,
                updateProfileData.fulfilled(data, ''),
            ),
        ).toEqual({
            isLoading: false,
            form: data,
            data,
        })
    })
})
