export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MANAGER = 'MANAGER',
}

export interface IUser {
    id: string | number
    username: string
    avatar?: string
    roles?: UserRole[]
}

export interface UserSchema {
    authData?: IUser
    _inited?: boolean
}
