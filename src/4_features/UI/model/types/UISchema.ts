export type ScrollSchema = Record<string, number>

export interface UISchema {
    scroll: ScrollSchema
    mainColor?: string
    secondaryColor?: string
    isScrolling?: boolean
}
