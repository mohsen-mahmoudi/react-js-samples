import { Table as AntTable } from 'antd'
import { useMemo } from 'react'

export default function Table({ data, columns, rowKey = 'id', ...props }) {

    const newColumns = useMemo(() => {
        // first dataIndex: col.key the ...c if dataIndex has exists then override this
        return columns.map(col => ({ dataIndex: col.key, ...col }))
    }, columns)

    return <AntTable dataSource={data} columns={newColumns} rowKey={rowKey} {...props} />
}
