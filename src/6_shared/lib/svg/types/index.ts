export type IconComponentName =
    | 'palette'
    | 'burger'
    | 'home'
    | 'info'
    | 'profile'
    | 'articles'
    | 'eye'
    | 'calendar'
    | 'back'
    | 'grid'
    | 'list'
    | 'edit'
    | 'add'

export interface ISvgOptions {
    pathFill?: string
    svgFill?: string
    width?: number
    height?: number
    opacity?: string
    children?: any
    viewBox?: string
    strokeColor?: string
    strokeOpacity?: string | number
    strokeWidth?: string | number
}
