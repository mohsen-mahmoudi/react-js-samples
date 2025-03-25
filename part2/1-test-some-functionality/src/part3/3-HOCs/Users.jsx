import { Component } from "react"

export const user = {
    id: 1,
    name: 'mohsen',
    premissions: ['ROLE_ADD', 'ROLE_REMOVE', 'ROLE_EDIT', 'ROLE_VIEW_ALL']
}

export function checkPermission(permission) {
    return user.premissions.includes(permission)
}

export function acl(NativeComponent) {
    return class AclComponent extends Component {
        render() {
            if (this.props.permission && !checkPermission(this.props.permission)) {
                return null
            }
            return <NativeComponent {...this.props} />
        }
    }
}

// use upper method with functional component
// export default (NativeComponent) => {
//     return (props) => {
//         if (props.permission && !checkPermission(props.permission)) {
//             return null
//         }
//         return <NativeComponent {...props} />
//     }
// }