export function posts(state = [], { type, payload }) {
    switch (type) {
        case 'posts-data':
            return payload
        default:
            return state
    }
}

export function post(state = {}, { type, payload }) {
    switch (type) {
        case 'post-data':
            return payload
        default:
            return state
    }
}
