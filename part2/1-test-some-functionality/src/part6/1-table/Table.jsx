import React from 'react'

export default function Table({ data, columns, rowKey }) {
  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map((col) => (
            <td key={col.dataIndex}>{col.title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr key={(typeof rowKey) === 'function' ? rowKey(record) : record[rowKey]}>
            {columns.map(col => (
              <td key={col.dataIndex}>
                {col.render ? col.render(record) : record[col.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}