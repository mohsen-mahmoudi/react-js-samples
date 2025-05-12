export function users(state = [], { type, payload }) {
    switch (type) {
        case 'users-data':
            return payload
        default:
            return state
    }
}

export function loading(state = false, { type, payload }) {
    switch (type) {
        case 'users-loading':
            return payload
        default:
            return state
    }
}