export interface IUser {
    id: string | number
    username: string
    avatar?: string
}

export interface UserSchema {
    authData?: IUser
    _inited?: boolean
}