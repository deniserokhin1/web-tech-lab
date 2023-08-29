import { PageError } from '3_widgets/PageError'
import React, { Suspense, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    // eslint-disable-next-line n/handle-callback-err
    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // eslint-disable-next-line no-console
        console.log(error, errorInfo)
    }

    render(): JSX.Element | ReactNode {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return (
                <Suspense>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}
