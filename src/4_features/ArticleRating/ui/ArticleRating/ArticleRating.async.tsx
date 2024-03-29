import { Suspense, lazy } from 'react'

import { Skeleton } from '@/6_shared/ui/Skeleton'

import { ArticleRatingProps } from './ArticleRating'

const ArticleRatingAsync = lazy(() => import('./ArticleRating'))

export const ArticleRatingLazy = (props: ArticleRatingProps): JSX.Element => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingAsync {...props} />
        </Suspense>
    )
}
