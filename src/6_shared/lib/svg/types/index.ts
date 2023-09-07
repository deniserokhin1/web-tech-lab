export type IconComponentName = 'palette' | 'burger' | 'home' | 'info' | 'profile'

export interface ISvgOptions {
    onHover?: (event: any) => void
    onUnHover?: (event: any) => void
    pathFill?: string
    svgFill?: string
    width?: number
    height?: number
    opacity?: string
    children?: any
    viewBox?: string
    stroke?: string
    strokeOpacity?: string | number
    strokeWidth?: string | number
}
