type Mods = Record<string, boolean | string | undefined>

export const classNames = (
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key, _]) => key),
        ...additional.filter(Boolean),
    ]
        .join(' ')
        .trim()
}
