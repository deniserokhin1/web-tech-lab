import { Flex, type FlexProps } from '../Flex/Flex'

export type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps): JSX.Element => {
    const { align = 'start', justify = 'start' } = props

    return <Flex {...props} direction="column" align={align} justify={justify} />
}
