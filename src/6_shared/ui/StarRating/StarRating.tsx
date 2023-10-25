import { memo, useState } from 'react'

import { classNames } from '@/6_shared/lib'

import StarIcon from '../../assets/star.svg?react'
import { Icon } from '../../ui/Icon/Icon'
import { HStack } from '../Stack'

import cls from './StarRating.module.scss'

interface StarRatingProps {
    className?: string
    size?: number
    selectedStars?: number
    onSelect?: (starsCount: number) => void
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
    const { className, onSelect, selectedStars = 0, size = 50 } = props
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
    const [isSelected, setSelected] = useState(Boolean(selectedStars))

    const onClick = (starsCount: number) => () => {
        if (isSelected) return
        onSelect?.(starsCount)
        setSelected(true)
    }

    const onHover = (starsCount: number) => () => {
        if (isSelected) return
        setCurrentStarsCount(starsCount)
    }

    const onLeave = (): void => {
        if (isSelected) return
        setCurrentStarsCount(0)
    }

    return (
        <HStack className={classNames(cls.container, {}, [className])}>
            {stars.map((i) => (
                <Icon
                    Svg={StarIcon}
                    key={i}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(i)}
                    onMouseLeave={onLeave}
                    onClick={onClick(i)}
                    className={classNames(
                        cls.starIcon,
                        {
                            [cls.hovered]: currentStarsCount >= i,
                            [cls.isSelected]: isSelected,
                        },
                        [cls.normal],
                    )}
                />
            ))}
        </HStack>
    )
})
