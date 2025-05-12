export function setUsers(payload) {
    return { type: "users-data", payload }
}

export function setLoading(payload) {
    return { type: "users-loading", payload }
}