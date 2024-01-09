// DetailViewTable.js

import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const DetailViewTable = ({ open, onClose, selectedRow }) => {
  // Check if selectedRow is null before accessing its properties
  const rowData = selectedRow || {} // Use an empty object if selectedRow is null

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell align='right'>Lead Id</TableCell>
            <TableCell align='right'>Po Number</TableCell>
            <TableCell align='right'>value</TableCell>
            <TableCell align='right'>Total price </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Map and render rows for each property in the selected row */}
          {Object.entries(rowData).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell component='th' scope='row'>
                {key}
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DetailViewTable
