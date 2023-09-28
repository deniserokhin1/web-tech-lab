export function getQueryParams(params: OptionalRecord<string, string>): string {
    const searchParams = new URLSearchParams(window.location.search)
    Object.entries(params).forEach(([name, value]) => {
        if (!value) {
            if (searchParams.has(name)) searchParams.delete(name)
        } else {
            searchParams.set(name, value)
        }
    })
    return `?${searchParams.toString()}`
}

export function addQueryParams(params: OptionalRecord<string, string>): void {
    window.history.pushState(null, '', getQueryParams(params))
}
