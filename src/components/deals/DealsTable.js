// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import Icon from 'src/@core/components/icon'

const rows = [
  {
    id: 1,
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    price: 3.99,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 }
    ]
  },
  { id: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, price: 4.99, history: [] },
  {
    id: 3,
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
    price: 3.79,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 2 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 }
    ]
  },
  {
    id: 4,
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    price: 2.5,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 5 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 2 }
    ]
  },
  { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, price: 1.5, history: [] }
]

const Row = props => {
  // ** Props
  const { row } = props

  // ** State
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            <Icon icon={open ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.calories}</TableCell>
        <TableCell align='right'>{row.fat}</TableCell>
        <TableCell align='right'>{row.carbs}</TableCell>
        <TableCell align='right'>{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Typography variant='h6' gutterBottom component='div'>
                History
              </Typography>
              {Array.isArray(row.history) && row.history.length > 0 ? (
                <Table size='small' aria-label='purchases'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align='right'>Amount</TableCell>
                      <TableCell align='right'>Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map(historyRow => (
                      <TableRow key={historyRow.date}>
                        <TableCell component='th' scope='row'>
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align='right'>{historyRow.amount}</TableCell>
                        <TableCell align='right'>{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Typography variant='body1'>No history available</Typography>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const TableCollapsible = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat (g)</TableCell>
            <TableCell align='right'>Carbs (g)</TableCell>
            <TableCell align='right'>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCollapsible
