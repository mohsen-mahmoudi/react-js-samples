import React, { useMemo } from 'react'
import { Table as AntTable } from 'antd'

export default function Table({ data, columns, rowKey = 'id' }) {

    const newColumns = useMemo(() => {
        // first dataIndex: col.key the ...c if dataIndex has exists then override this
        return columns.map(col => ({ dataIndex: col.key, ...col }))
    }, columns)

    return <AntTable dataSource={data} columns={newColumns} rowKey={rowKey} />
}
