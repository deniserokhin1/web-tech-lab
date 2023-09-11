import { Country } from '5_entities/Country'
import { profileActions, profileReducer } from './profileSlice'
import { Currency } from '5_entities/Currency'
import {
    type ProfileSchema,
    type IProfile,
    ValidateProfileErrors,
} from '../types/profile'
import { updateProfileData } from '../services/updateProfileData'

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
    const {cancelEdit, setReadOnly, updateProfile} = profileActions
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(
            profileReducer(state as ProfileSchema, setReadOnly(true)),
        ).toEqual({ readonly: true })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }

        expect(
            profileReducer(state as ProfileSchema, cancelEdit()),
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        })
    })

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'Den' } }

        expect(
            profileReducer(
                state as ProfileSchema,
                updateProfile({
                    username: 'Denis',
                }),
            ),
        ).toEqual({
            form: { username: 'Denis' },
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        }

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual(
            {
                isLoading: true,
                validateErrors: undefined,
            },
        )
    })

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            form: data,
            data,
        })
    })
})
