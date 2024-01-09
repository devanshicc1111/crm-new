// // ** React Import
// import { useState } from 'react'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Typography from '@mui/material/Typography'
// import CardHeader from '@mui/material/CardHeader'
// import { DataGrid, GridCloseIcon } from '@mui/x-data-grid'
// import Button from '@mui/material/Button'
// import VisibilityIcon from '@mui/icons-material/Visibility'
// import IconButton from '@mui/material/IconButton'
// import DeleteIcon from '@mui/icons-material/Delete'
// // import ContactForm from './ContactForm'
// import { Collapse, Fab, Icon, Tooltip } from '@mui/material'
// import AddIcon from '@mui/icons-material/Add'

// import QuickSearchToolbar from 'src/GenericButton/QuickSearchToolBar'

// // ** renders client column
// const renderClient = params => {
//   const { row } = params
//   const stateNum = Math.floor(Math.random() * 6)
//   const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
//   const color = states[stateNum]
// }

// const statusObj = {
//   1: { title: 'current', color: 'primary' },
//   2: { title: 'professional', color: 'success' },
//   3: { title: 'rejected', color: 'error' },
//   4: { title: 'resigned', color: 'warning' },
//   5: { title: 'applied', color: 'info' }
// }

// const rows = [
//   {
//     id: 1,
//     Contact_name: "Korrie O'Crevy",
//     post: 'Nuclear Power Engineer',
//     email: 'kocrevy0@thetimes.co.uk',
//     Account_Name: "Korrie O'Crevy",
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 7,
//     Contact_name: 'Eileen Diehn',
//     email: 'ediehn6@163.com',
//     Account_Name: 'Eileen Diehn',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 11,

//     Contact_name: 'De Falloon',
//     email: 'dfalloona@ifeng.com',
//     Account_Name: 'De Falloon',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 3,
//     Contact_name: 'Stella Ganderton',
//     email: 'sganderton2@tuttocitta.it',
//     Account_Name: 'Stella Ganderton',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 5,
//     Contact_name: 'Harmonia Nisius',
//     email: 'hnisius4@gnu.org',
//     Account_Name: 'Harmonia Nisius',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 6,
//     Contact_name: 'Genevra Honeywood',
//     email: 'ghoneywood5@narod.ru',
//     Account_Name: 'Genevra Honeywood',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 4,
//     Contact_name: 'Dorolice Crossman',
//     email: 'dcrossman3@google.co.jp',
//     Account_Name: 'Dorolice Crossman',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 8,
//     Contact_name: 'Richardo Aldren',
//     email: 'raldren7@mtv.com',
//     Account_Name: 'Richardo Aldren',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 9,
//     Contact_name: 'Allyson Moakler',
//     email: 'amoakler8@shareasale.com',
//     Account_Name: 'Allyson Moakler',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   },
//   {
//     id: 10,
//     Contact_name: 'Merline Penhalewick',
//     email: 'mpenhalewick9@php.net',
//     Account_Name: 'Merline Penhalewick',
//     Phone: 9876543201,
//     Contact_owner: '9876543210'
//   }
// ]

// const columns = [
//   {
//     flex: 0.25,
//     minWidth: 290,
//     field: 'Contact_name',
//     headerName: 'Contact Name',
//     renderCell: params => {
//       const { row } = params

//       return (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {renderClient(params)}
//           <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//             <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
//               {row.Contact_name}
//             </Typography>
//             <Typography noWrap variant='caption'>
//               {row.email}
//             </Typography>
//           </Box>
//         </Box>
//       )
//     }
//   },
//   {
//     flex: 0.175,
//     minWidth: 120,
//     headerName: 'Account Name',
//     field: 'Account_Name',

//     renderCell: params => (
//       <Typography variant='body2' sx={{ color: 'text.primary' }}>
//         {params.row.Account_Name}
//       </Typography>
//     )
//   },
//   {
//     flex: 0.175,
//     minWidth: 110,
//     field: 'Phone',
//     headerName: 'Phone',
//     renderCell: params => (
//       <Typography variant='body2' sx={{ color: 'text.primary' }}>
//         {params.row.Phone}
//       </Typography>
//     )
//   },
//   {
//     flex: 0.125,
//     minWidth: 80,
//     headerName: 'Contact Owner',
//     field: 'Contact_owner',
//     renderCell: params => (
//       <Typography variant='body2' sx={{ color: 'text.primary' }}>
//         {params.row.Contact_owner}
//       </Typography>
//     )
//   },

//   {
//     flex: 0.125,
//     minWidth: 140,
//     field: 'actions',
//     headerName: 'Actions',
//     renderCell: params => {
//       return (
//         <div>
//           <IconButton>
//             <VisibilityIcon />
//           </IconButton>
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </div>
//       )
//     }
//   }
// ]

// const DealsTable = () => {
//   // ** State
//   const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
//   const [open, setOpen] = useState(false)
//   const [openDialog, setOpenDialog] = useState(false)
//   const [data] = useState(rows)
//   const [filteredData, setFilteredData] = useState([])
//   const [collapsed, setCollapsed] = useState(true)
//   const [searchText, setSearchText] = useState('')
//   const handleSubmit = () => {
//     setOpen(!open)
//   }

//   const handleContactFormClose = () => {
//     setOpen(false)
//     setOpenDialog(false)
//   }

//   const handleContactFormSubmit = () => {
//     handleContactFormClose()
//   }

//   const handleVisibilityIconClick = () => {
//     setOpenDialog(true)
//   }
//   const handleDialogSubmit = params => {
//     handleVisibilityIconClick()
//   }
//   const handleSearch = searchValue => {
//     setSearchText(searchValue)
//     const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')

//     const filteredRows = data.filter(row => {
//       return Object.keys(row).some(field => {
//         // @ts-ignore
//         return searchRegex.test(row[field].toString())
//       })
//     })
//     if (searchValue.length) {
//       setFilteredData(filteredRows)
//     } else {
//       setFilteredData([])
//     }
//   }
//   return (
//     <Card>
//       <CardHeader
//         title='CONTACTS '
//         action={
//           <>
//             <div style={{ display: 'flex' }}>
//               <div>
//                 <Tooltip>
//                   <span>
//                     <IconButton
//                       size='small'
//                       aria-label='collapse'
//                       sx={{ color: 'text.secondary' }}
//                       onClick={() => setCollapsed(!collapsed)}
//                     >
//                       <Icon icon={!collapsed ? 'tabler:chevron-down' : 'tabler:chevron-up'} />
//                     </IconButton>
//                   </span>
//                 </Tooltip>
//               </div>
//               <div>
//                 <div className='PaIconCon'>
//                   <Tooltip title='CREATE ACCOUNT' placement='top'>
//                     <span>
//                       <Fab
//                         style={{
//                           width: '2.3rem',
//                           height: '2.3rem',
//                           backgroundColor: '#7367F0',
//                           marginRight: '1rem'
//                         }}
//                         onClick={handleSubmit}
//                       >
//                         <AddIcon style={{ fontSize: '19', color: '#fff' }} />
//                       </Fab>
//                     </span>
//                   </Tooltip>
//                 </div>

//                 {/* <ContactForm /> */}
//               </div>
//             </div>
//           </>
//         }
//       />

//       <Collapse in={collapsed}>
//         <DataGrid
//           sx={{ display: 'flex' }}
//           autoHeight
//           slots={{ toolbar: QuickSearchToolbar }}
//           rows={filteredData.length ? filteredData : data}
//           columns={columns.map(col => ({
//             ...col,
//             renderCell: params => {
//               if (col.field === 'actions') {
//                 return (
//                   <div>
//                     <IconButton onClick={() => handleDialogSubmit(params)}>
//                       <VisibilityIcon />
//                     </IconButton>
//                     <IconButton>
//                       <DeleteIcon />
//                     </IconButton>
//                   </div>
//                 )
//               }

//               return col.renderCell(params)
//             }
//           }))}
//           checkboxSelection
//           pageSizeOptions={[7, 10, 25, 50]}
//           paginationModel={paginationModel}
//           onPaginationModelChange={setPaginationModel}
//           slotProps={{
//             baseButton: {
//               size: 'medium',
//               variant: 'outlined'
//             },
//             toolbar: {
//               value: searchText,
//               clearSearch: () => handleSearch(''),
//               onChange: event => handleSearch(event.target.value)
//             }
//           }}
//         />
//       </Collapse>

//     </Card>
//   )
// }

// export default DealsTable

// ** React Imports
import { useState, Fragment } from 'react'

import VisibilityIcon from '@mui/icons-material/Visibility'

import DeleteIcon from '@mui/icons-material/Delete'
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
import AddIcon from '@mui/icons-material/Add'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

import CustomChip from 'src/@core/components/mui/chip'
// import { useDemoData } from '@mui/x-data-grid-generator'
import CustomTextField from 'src/@core/components/mui/text-field'
import SortIcon from '@mui/icons-material/Sort'
import { Card, CardHeader, Dialog, DialogTitle, TablePagination } from '@mui/material'

import ViewDetails from './ViewDetails'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'
import Filter from './Filter'

const VISIBLE_FIELDS = ['account_name', 'lead_id', 'po_number', 'dueDate', 'value', 'status', 'action']

const ControlledFilters = () => {
  const { data } = useDemoData({
    visibleFields: VISIBLE_FIELDS
  })

  return (
    <div style={{ height: 0, width: '100%', marginLeft: '25rem' }}>
      <DataGrid {...data} slots={{ toolbar: Filter }} />
    </div>
  )
}

const createData = (account_name, lead_id, po_number, dueDate, value, status, action) => {
  return {
    account_name,
    lead_id,
    po_number,
    dueDate,
    value,
    status,
    action,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
        value: 2
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
        value: 2
      }
    ]
  }
}

const Row = props => {
  // ** Props
  const { row } = props

  // ** State
  const [open, setOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }
  const handleDialogClose = () => {
    setDialogOpen(false)
  }
  const statusObj = {
    1: { title: 'New', color: 'primary' },
    2: { title: 'Upside', color: 'success' },
    3: { title: 'Strong Upside', color: 'secondary' },
    4: { title: 'Commit', color: 'info' }
  }

  return (
    <>
      <Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
              <Icon icon={open ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
            </IconButton>
          </TableCell>
          <TableCell component='th' scope='row'>
            {row.account_name}
          </TableCell>
          <TableCell align='right'>{row.lead_id}</TableCell>
          <TableCell align='right'>{row.po_number}</TableCell>
          <TableCell align='right'>{row.dueDate}</TableCell>
          <TableCell align='right'>{row.value}</TableCell>

          <TableCell align='right'>
            <CustomChip
              rounded
              size='small'
              skin='light'
              label={statusObj[row.status].title}
              color={statusObj[row.status].color}
            />
          </TableCell>

          <TableCell align='right'>
            {row.action}
            <IconButton onClick={handleDialogOpen}>
              <VisibilityIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={8} sx={{ py: '0 !important' }}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box sx={{ m: 2 }}>
                <Typography variant='h6' gutterBottom component='div'>
                  History
                </Typography>
                <Table size='small' aria-label='purchases'>
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
                    {row.history.map(historyRow => (
                      <TableRow key={historyRow.date}>
                        <TableCell component='th' scope='row'>
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align='right'>{historyRow.amount}</TableCell>
                        <TableCell align='right'>{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                        <TableCell align='right'>{historyRow.value}</TableCell>

                        <TableCell align='right'>{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>

      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth='md' fullWidth>
        <ViewDetails open={dialogOpen} handleClose={handleDialogClose} />
      </Dialog>
    </>
  )
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4),
  createData('Eclair', 262, 16.0, 24, 6.0, 3),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1)
]

const TableCollapsible = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [data] = useState(rows)
  const [searchQuery, setSearchQuery] = useState('')
  const [filtered, setFiltered] = useState([])
  const filteredData = data.filter(
    item =>
      item.account_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lead_id.toString().includes(searchQuery) ||
      item.po_number.toString().includes(searchQuery) ||
      item.value.toString().includes(searchQuery)
  )

  console.log('object', filteredData)
  const [page, setPage] = useState(2)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Box
          sx={{
            gap: 1,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            height: '4rem'
          }}
        >
          <div style={{ fontSize: '1.25rem', padding: '0.5rem' }}>Deal</div>

          <CustomTextField
            placeholder='Search…'
            variant='outlined'
            value={searchQuery}
            sx={{ marginLeft: '54rem' }}
            onChange={e => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box sx={{ mr: 4, display: 'flex', padding: '1' }}>
                  <Icon fontSize='1.25rem' icon='tabler:search' sx={{ mr: 2 }} />
                </Box>
              ),
              endAdornment: (
                <IconButton
                  size='small'
                  title='Clear'
                  aria-label='Clear'
                  onClick={() => {
                    setSearchQuery('')
                    setFiltered([])
                  }}
                >
                  <Icon fontSize='1.25rem' icon='tabler:x' />
                </IconButton>
              )
            }}
          />
          <div>
            {/* <IconButton
              size='small'
              aria-label='collapse'
              sx={{
                borderRadius: '0.5rem',
                border: '10px',
                color: 'text.secondary',
                width: '5rem',
                height: '2.5rem'
              }}
              onClick={() => setCollapsed(!collapsed)}
            >
              <SortIcon />
              Filter
            </IconButton> */}
            <ControlledFilters />
          </div>
        </Box>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow sx={{ background: 'rgba(236, 236, 236)' }}>
              <TableCell />
              <TableCell>Account Name</TableCell>
              <TableCell align='right'>Lead Id</TableCell>
              <TableCell align='right'> PO Number</TableCell>
              <TableCell align='right'> Due Date</TableCell>
              <TableCell align='right'> Value</TableCell>
              <TableCell align='right'> Status</TableCell>
              <TableCell align='right'> Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map(row => (
            <Row key={row.account_name} row={row} />
          ))} */}
            {filteredData.map(row => (
              <>
                <Row key={row.account_name} row={row} />
              </>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component='div'
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  )
}

export default TableCollapsible
