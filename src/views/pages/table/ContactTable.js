// ** React Import
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridCloseIcon } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ContactForm from './createForm/ContactForm'
import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ContactDetails from './details/ContactDetails'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]
}

const statusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'professional', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

const rows = [
  {
    id: 1,
    Contact_name: "Korrie O'Crevy",
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    Account_Name: "Korrie O'Crevy",
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 7,
    Contact_name: 'Eileen Diehn',
    email: 'ediehn6@163.com',
    Account_Name: 'Eileen Diehn',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 11,

    Contact_name: 'De Falloon',
    email: 'dfalloona@ifeng.com',
    Account_Name: 'De Falloon',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 3,
    Contact_name: 'Stella Ganderton',
    email: 'sganderton2@tuttocitta.it',
    Account_Name: 'Stella Ganderton',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 5,
    Contact_name: 'Harmonia Nisius',
    email: 'hnisius4@gnu.org',
    Account_Name: 'Harmonia Nisius',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 6,
    Contact_name: 'Genevra Honeywood',
    email: 'ghoneywood5@narod.ru',
    Account_Name: 'Genevra Honeywood',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 4,
    Contact_name: 'Dorolice Crossman',
    email: 'dcrossman3@google.co.jp',
    Account_Name: 'Dorolice Crossman',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 8,
    Contact_name: 'Richardo Aldren',
    email: 'raldren7@mtv.com',
    Account_Name: 'Richardo Aldren',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 9,
    Contact_name: 'Allyson Moakler',
    email: 'amoakler8@shareasale.com',
    Account_Name: 'Allyson Moakler',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  },
  {
    id: 10,
    Contact_name: 'Merline Penhalewick',
    email: 'mpenhalewick9@php.net',
    Account_Name: 'Merline Penhalewick',
    Phone: 9876543201,
    Contact_owner: '9876543210'
  }
]

const columns = [
  {
    flex: 0.25,
    minWidth: 290,
    field: 'Contact_name',
    headerName: 'Contact Name',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.Contact_name}
            </Typography>
            <Typography noWrap variant='caption'>
              {row.email}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.175,
    minWidth: 120,
    headerName: 'Account Name',
    field: 'Account_Name',

    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.Account_Name}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 110,
    field: 'Phone',
    headerName: 'Phone',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.Phone}
      </Typography>
    )
  },
  {
    flex: 0.125,
    minWidth: 80,
    headerName: 'Contact Owner',
    field: 'Contact_owner',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.Contact_owner}
      </Typography>
    )
  },

  {
    flex: 0.125,
    minWidth: 140,
    field: 'actions',
    headerName: 'Actions',
    renderCell: params => {
      return (
        <div>
          <IconButton>
            <VisibilityIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      )
    }
  }
]

const ContactTable = () => {
  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [open, setOpen] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const handleSubmit = () => {
    setOpen(!open)
  }

  const handleContactFormClose = () => {
    setOpen(false)
    setOpenDialog(false)
  }

  const handleContactFormSubmit = () => {
    handleContactFormClose()
  }

  const handleVisibilityIconClick = () => {
    setOpenDialog(true)
  }

  const handleDialogSubmit = params => {
    handleVisibilityIconClick()
  }

  return (
    <Card>
      <CardHeader
        title='CONTACTS'
        action={
          <div>
            <div className='PaIconCon'>
              <Tooltip title='CREATE CONTACT' placement='top'>
                <span>
                  <Fab
                    style={{
                      width: '2.2rem',
                      height: '.1rem',
                      backgroundColor: '#7367F0'
                    }}
                    onClick={handleSubmit}
                  >
                    <AddIcon style={{ fontSize: '19', color: '#fff' }} />
                  </Fab>
                </span>
              </Tooltip>
            </div>
          </div>
        }
      />
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns.map(col => ({
          ...col,
          renderCell: params => {
            if (col.field === 'actions') {
              return (
                <div>
                  <IconButton onClick={() => handleDialogSubmit(params)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </div>
              )
            }

            return col.renderCell(params)
          }
        }))}
        checkboxSelection
        pageSizeOptions={[7, 10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
      <ContactForm open={open} handleClose={handleContactFormClose} handleSubmit={handleContactFormSubmit} />
      <ContactDetails
        open={openDialog}
        handleClose={handleContactFormClose}
        handleDialogSubmit={handleVisibilityIconClick}
      />
    </Card>
  )
}

export default ContactTable
