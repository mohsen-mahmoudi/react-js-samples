export function setPosts(payload) {
    return { type: "posts-data", payload };
}

export function setPost(payload) {
    return { type: "post-data", payload }
}