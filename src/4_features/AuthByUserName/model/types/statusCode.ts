export const statusCode = {
    '403': 'Неверный логин и/или пароль',
    '404': 'Нет Интернета',
    '0': 'Ошибка',
}

export type StatusCodeKey = keyof typeof statusCode
