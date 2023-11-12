export interface TechnologiesListSchema {
    technologies?: ITechnology[]
    isLoading: boolean
    error?: string
}

export interface ITechnology {
    id: string
    title: string
}
