import React from 'react'
import Api from '../Api'
import { useTable } from 'react-table'

function ReactTable() {

    const data = React.useMemo(() => Api
  ,[])
    const columns = React.useMemo(
        () =>  [
          {
            Header:'Name',
            accessor:'name'
          },
          {
            Header:'Team',
            accessor:'team'
          },
          {
            Header:'League',
            accessor:'league_code'
          },
          {
            Header:'Season',
            accessor:'season'
          },
          {
            Header:'Position',
            accessor:'position'
          },
          {
            Header:'Minutes',
            accessor:'minutes'
          },
          {
            Header:'Age',
            accessor:'age'
          },
          {
            Header:'Off',
            accessor:'x_gfar'
          },
          {
            Header:'Def',
            accessor:'x_gaar'
          },
          {
            Header:'Total',
            accessor:'x_gdar'
          },
          {
            Header:'Ball Progression',
            accessor:'attack_op_bp'
          },
          {
            Header:'Shot Creation',
            accessor:'attack_op_sc'
          },
          {
            Header:'Ball Retention',
            accessor:'ball_ret'
          },
          {
            Header:'Defending Impact',
            accessor:'def_qual'
          },
          {
            Header:'Defending Frequency',
            accessor:'def_quant'
          }
        ],
        []
      )

    const tableInstance = useTable({ columns, data })

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = tableInstance

  return (
    <div>
      <table {...getTableProps()}>
      <thead>
        {// Loop over the header rows
       headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps()}>
          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <th {...column.getHeaderProps()} style={{
              padding:'5px',
              border: 'solid 1px black',
              background: 'aliceblue',
              color: 'black',
              fontWeight: 'bold',
            }}>
              {// Render the header
              column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {// Loop over the table rows
       rows.map(row => {
        // Prepare the row for display
        prepareRow(row)
        return (
          // Apply the row props
          <tr {...row.getRowProps()}>
            {// Loop over the rows cells
            row.cells.map(cell => {
              // Apply the cell props
              return (
                <td {...cell.getCellProps()} style={{
                  padding: '10px',
                  border: 'solid 1px gray',
                  background: 'papayawhip',
                }}>
                  {// Render the cell contents
                  cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  </div>
  )
}

export default ReactTable