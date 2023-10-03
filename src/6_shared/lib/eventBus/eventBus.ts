const subscriptions: Record<string, Set<any>> = {}

const subscribe = (eventName: string, callBack: any): (() => void) => {
    if (!subscriptions[eventName]) {
        subscriptions[eventName] = new Set()
    }

    const callbacks = subscriptions[eventName]
    callbacks.add(callBack)

    return () => {
        callbacks.delete(callBack)

        if (callbacks.size === 0) {
            delete subscriptions[eventName]
        }
    }
}

const broadcast = (eventName: string, ...args: any): void => {
    if (!subscriptions[eventName]) return

    const callbacks = subscriptions[eventName]

    callbacks.forEach((cb) => cb(...args))
}

const eventBus = {
    subscribe,
    broadcast,
}

export default eventBus
