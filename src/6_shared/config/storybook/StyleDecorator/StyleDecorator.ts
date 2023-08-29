import '1_app/styles/index.scss'
import { type ReactElement } from 'react'

export const StyleDecorator = (story: () => ReactElement): ReactElement => story()
