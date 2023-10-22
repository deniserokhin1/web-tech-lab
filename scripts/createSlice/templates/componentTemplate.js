const interfaceConst = 'interface'

module.exports = (
    componentName,
) => `import { classNames } from '@/6_shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './${componentName}.module.scss'
import { memo } from 'react'

const namespace = __IS_DEV__ ? 'translation' : 'namespace'

${interfaceConst} ${componentName}Props {
    className?: string
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props
    const { t } = useTranslation(namespace)
    
    return (
        <div className={classNames(cls.container, {}, [className])}></div>
    )
})`
