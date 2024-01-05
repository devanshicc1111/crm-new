// ** React Import
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import VisibilityIcon from '@mui/icons-material/Visibility'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'

// ** Utils Import
import { escapeRegExp } from '@mui/x-data-grid/utils/utils'

import { Collapse, Dialog, Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import LeadDetails from './LeadDetails'
import LeadStepper from './LeadStepper'
import HorizontalLinearStepper from './LeadStepper'
import QuickSearchToolbar from '../GenericButton/QuickSearchToolbar'

// ** renders client column
const renderClient = params => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 5)
  const states = ['success', 'info', 'primary', 'secondary']
  const color = states[stateNum]
}

const statusObj = {
  1: { title: 'New', color: 'primary' },
  2: { title: 'Upside', color: 'success' },
  3: { title: 'Strong Upside', color: 'secondary' },
  4: { title: 'Commit', color: 'info' }
}

const rows = [
  {
    id: 1,
    Account_name: "Korrie O'Crevy",
    Lead_title: 'Nuclear Power Engineer',
    Total_value: 23896.35,
    status: 3
  },
  {
    id: 3,
    avatar: '',
    Account_name: 'Eileen Diehn',
    Lead_title: 'Environmental Specialist',
    Total_value: 18991.67,
    status: 2
  },
  {
    id: 5,

    Account_name: 'Harmonia Nisius',
    Lead_title: 'Environmental Specialist',
    Total_value: 10909.52,
    status: 1
  }
]

const columns = [
  {
    flex: 0.25,
    minWidth: 290,
    field: 'Account_name',
    headerName: 'Account Name',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.Account_name}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.175,
    minWidth: 120,
    headerName: 'Lead Title',
    field: 'Lead_title',
    valueGetter: params => new Date(params.value),
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.Lead_title}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 110,
    field: 'Total_value',
    headerName: 'Total Value',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.Total_value}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 140,
    field: 'status',
    headerName: 'Status',
    renderCell: params => {
      const status = statusObj[params.row.status]

      return (
        <CustomChip
          rounded
          size='small'
          skin='light'
          color={status.color}
          label={status.title}
          sx={{ '& .MuiChip-label': { textTransform: 'capitalize' } }}
        />
      )
    }
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

const LeadTable = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [open, setOpen] = useState(false)
  const [stepperopen, setStepperopen] = useState(false)

  const [openDialog, setOpenDialog] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const [data] = useState(rows)
  const [filteredData, setFilteredData] = useState([])
  const [searchText, setSearchText] = useState('')

  const handleSubmit = () => {
    setOpen(!open)
  }

  const handleopen = () => {
    setStepperopen(true)
  }

  const handleContactFormClose = () => {
    setOpen(false)
    setOpenDialog(false)
    setStepperopen(false)
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

  const handleSearch = searchValue => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')

    const filteredRows = data.filter(row => {
      return Object.keys(row).some(field => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    } else {
      setFilteredData([])
    }
  }

  return (
    <Card>
      <CardHeader
        title='LEADS'
        action={
          <div>
            <div className='PaIconCon'>
              <IconButton onClick={handleopen}>
                <Tooltip title='CREATE LEAD' placement='top'>
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
              </IconButton>
            </div>
          </div>
        }
      />
      {/* <CardHeader title='Selection' action={<GenericAddIcon />} /> */}

      <Collapse in={collapsed}>
        <DataGrid
          sx={{ display: 'flex' }}
          autoHeight
          slots={{ toolbar: QuickSearchToolbar }}
          rows={filteredData.length ? filteredData : data}
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
          slotProps={{
            baseButton: {
              size: 'medium',
              variant: 'outlined'
            },
            toolbar: {
              value: searchText,
              clearSearch: () => handleSearch(''),
              onChange: event => handleSearch(event.target.value)
            }
          }}
        />
      </Collapse>

      <Dialog open={stepperopen} onClose={handleContactFormClose}>
        <HorizontalLinearStepper handleClose={handleContactFormClose} handleDialogSubmit={handleVisibilityIconClick} />
      </Dialog>

      <LeadDetails
        open={openDialog}
        handleClose={handleContactFormClose}
        handleDialogSubmit={handleVisibilityIconClick}
      />
    </Card>
  )
}

export default LeadTable
