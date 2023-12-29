// ** React Import
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import VisibilityIcon from '@mui/icons-material/Visibility'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import ContactForm from './createForm/ContactForm'
import ProductForm from './createForm/ProductForm'
import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ProductDetails from './details/ProductDetails'

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
    SKU: '',
    title: 'De Falloon',
    type: '',
    MRP: '',
    Description: '',
    HSN: ''
  },
  {
    id: 3,
    SKU: '',
    title: 'Stella Ganderton',
    type: '',
    MRP: '',
    Description: '',
    HSN: ''
  },
  {
    id: 5,

    title: 'Harmonia Nisius',
    type: '',
    MRP: '',
    Description: '',
    HSN: ''
  },
  {
    id: 6,

    title: 'Genevra Honeywood',
    type: '',
    MRP: '',
    Description: '',
    HSN: ''
  },
  {
    id: 4,

    title: 'Dorolice Crossman',
    type: '',
    MRP: '',
    Description: '',
    HSN: ''
  },
  {
    id: 8,

    title: 'Richardo Aldren',
    type: 'Senior Sales Associate',
    MRP: '',
    Description: '',
    HSN: ''
  }
]

const columns = [
  {
    flex: 0.175,

    minWidth: 120,
    headerName: 'SKU',
    field: 'SKU',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.SKU}
      </Typography>
    )
  },
  {
    flex: 0.175,

    minWidth: 120,
    headerName: 'Product Title',
    field: 'title',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.title}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 110,
    field: 'type',
    headerName: 'Type',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.type}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'HSN',
    minWidth: 80,
    headerName: 'HSN',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.HSN}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'MRP',
    minWidth: 80,
    headerName: 'MRP',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.MRP}
      </Typography>
    )
  },
  {
    flex: 0.125,
    field: 'Description',
    minWidth: 80,
    headerName: 'Description',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.Description}
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

const ProductTable = () => {
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

  const handleDialogSubmit = () => {
    handleVisibilityIconClick()
  }

  return (
    <Card>
      <CardHeader
        title='PRODUCTS'
        action={
          <div>
            <div className='PaIconCon'>
              <Tooltip title='LIST PRODUCT' placement='top'>
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
            <ProductForm />
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
      <ProductForm open={open} handleClose={handleContactFormClose} handleSubmit={handleContactFormSubmit} />
      <ProductDetails
        open={openDialog}
        handleClose={handleContactFormClose}
        handleDialogSubmit={handleVisibilityIconClick}
      />
    </Card>
  )
}

export default ProductTable
