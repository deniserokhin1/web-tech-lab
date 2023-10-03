import eventBus from '../eventBus'
const eventName = 'startCall'

const subscribe = (callback: (value: any) => any): (() => void) => {
    return eventBus.subscribe(eventName, callback)
}
const broadcast = (data?: any): void => {
    eventBus.broadcast(eventName, data)
}

export default {
    subscribe,
    broadcast
}

