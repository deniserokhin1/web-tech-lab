export type ScrollSchema = Record<string, number>

export interface UISchema {
    scroll: ScrollSchema
    primaryColor?: string
    secondaryColor?: string
    bgColor?: string
    isScrolling?: boolean
}
