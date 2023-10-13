import { Flex, type FlexProps } from '../Flex/Flex'

export type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps): JSX.Element => {
    const { align = 'start', justify = 'start', max, className } = props

    return (
        <Flex
            direction="column"
            align={align}
            justify={justify}
            max={max}
            className={className}
            {...props}
        />
    )
}
