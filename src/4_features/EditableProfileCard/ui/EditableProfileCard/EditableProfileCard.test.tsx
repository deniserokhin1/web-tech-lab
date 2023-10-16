import { componentRender } from '@/6_shared/lib/tests/componentRender'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EditableProfileCard } from './EditableProfileCard'
import { Currency } from '@/5_entities/Currency'
import { Country } from '@/5_entities/Country'
import { type IProfile } from '@/5_entities/Profile'
import { profileReducer } from '../../model/slices/EditableProfileCardSlice'
import { $api } from '@/6_shared/api/api'

const profile: IProfile = {
    first: 'Денис',
    lastname: 'Ерохин',
    age: 32,
    currency: Currency.USD,
    country: Country.RU,
    city: 'Орел',
    id: '1',
    username: 'admin',
    avatar: 'https://img.freepik.com/free-vector/creative-hacker-logo-template_23-2149199402.jpg?w=2000',
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            validateErrors: [],
            form: profile,
        },
        user: {
            authData: {
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
}

describe('4_features/EditableProfileCard', () => {
    test('режим readonly должен переключиться', async () => {
        componentRender(<EditableProfileCard />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        ).toBeInTheDocument()
    })
    test('при отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user')

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelButton'),
        )

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Денис')
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Ерохин')

        screen.debug()
    })
    test('должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
        expect(screen.getByTestId('EditableProfileCard.Error.text')).toBeInTheDocument()
    })
    test('отправка запроса на сервер', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'Denis')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
        expect(mockPutReq).toHaveBeenCalled()
    })
})
