import React from 'react'
import {useTable} from 'react-table'
import { COLUMNS } from './columns'

export default function Basictable({ crypto, filtered, search, whichHandle }) {

function display(){
  if(search){
    return filtered
  }else{return crypto}
}

const tableInstance = useTable({
  columns: COLUMNS,
  data: display()
})


const { 
  getTableProps, 
  getTableBodyProps, 
  headerGroups, 
  rows, 
  prepareRow
} = tableInstance

  return (
    
    <table {...getTableProps()}>
      <thead >
        {headerGroups.map(headerGroup => ( 
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return(
      <tr {...row.getRowProps()}>
        {row.cells.map((cell) => {
          return (
        <td onClick={e=>whichHandle(row.values)} {...cell.getCellProps()}>{cell.render('Cell')}
        </td>
        )})}
      </tr>
      )
    })}
      </tbody>
    </table>
  )
}
