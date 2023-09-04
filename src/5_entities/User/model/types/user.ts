export interface IUser {
    id: string | number
    username: string
}

export interface UserSchema {
    authData?: IUser
}