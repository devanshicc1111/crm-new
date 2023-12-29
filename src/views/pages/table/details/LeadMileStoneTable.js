// ** React Import
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import VisibilityIcon from '@mui/icons-material/Visibility'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Collapse from '@mui/material/Collapse'
import Icon from 'src/@core/components/icon'
import SaveIcon from '@mui/icons-material/Save'
import DoneIcon from '@mui/icons-material/Done'
import CreateQuotation from './CreateQuotation'
import MileStoneToolbar from './MileStoneToolbar'
import { Dialog } from '@mui/material'

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

const escapeRegExp = value => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const rows = [
  {
    id: 1,
    avatar: '8.png',
    full_name: "Korrie O'Crevy",
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    discount: '0',
    start_date: '09/23/2016',
    type: 'service',
    age: '61',
    experience: '1 Year',
    unit_cost: '100000'
  },
  {
    id: 7,
    avatar: '',
    full_name: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    discount: '0',
    start_date: '10/15/2017',
    type: 'product',
    age: '59',
    experience: '9 Years',
    unit_cost: '100000'
  },
  {
    id: 11,
    avatar: '',
    full_name: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    discount: '0',
    start_date: '06/12/2018',
    type: 'service',
    age: '30',
    experience: '0 Year',
    unit_cost: '100000'
  },
  {
    id: 3,
    avatar: '7.png',
    full_name: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    discount: '0',
    start_date: '03/24/2018',
    type: 'product',
    age: '66',
    experience: '6 Years',
    unit_cost: '100000'
  },
  {
    id: 5,
    avatar: '',
    full_name: 'Harmonia Nisius',
    post: 'Senior Cost Accountant',
    email: 'hnisius4@gnu.org',
    discount: '0',
    start_date: '08/25/2017',
    type: 'service',
    age: '33',
    experience: '3 Years',
    unit_cost: '100000'
  },
  {
    id: 6,
    avatar: '',
    full_name: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    discount: '0',
    start_date: '06/01/2017',
    type: 'service',
    age: '61',
    experience: '1 Year',
    unit_cost: '100000'
  },
  {
    id: 4,
    avatar: '8.png',
    full_name: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    discount: '0',
    start_date: '12/03/2017',
    type: 'product',
    age: '22',
    experience: '2 Years',
    unit_cost: '100000'
  },
  {
    id: 8,
    avatar: '7.png',
    full_name: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    discount: '0',
    start_date: '11/05/2016',
    type: 'service',
    age: '55',
    experience: '5 Years',
    unit_cost: '100000'
  },
  {
    id: 9,
    avatar: '2.png',
    full_name: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    discount: '0',
    start_date: '12/29/2018',
    type: 'service',
    age: '39',
    experience: '9 Years',
    unit_cost: '100000'
  },
  {
    id: 10,
    avatar: '7.png',
    full_name: 'Merline Penhalewick',
    post: 'Junior Executive',
    email: 'mpenhalewick9@php.net',
    discount: '0',
    start_date: '04/19/2019',
    type: 'product',
    age: '23',
    experience: '3 Years',
    unit_cost: '100000'
  }
]

const columns = [
  {
    flex: 0.175,
    minWidth: 110,
    field: 'milestone',
    headerName: 'Milestone',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.milestone}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 110,
    field: 'totalCost',
    headerName: 'Total Cost',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.unit_cost}
      </Typography>
    )
  },
  {
    flex: 0.175,
    minWidth: 110,
    field: 'discount',
    editable: true,
    headerName: 'Discount',
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.discount}
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

const LeadMileStoneTable = () => {
  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [open, setOpen] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [tableCollapsed, setTableCollapsed] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [data] = useState(rows)
  const [filteredData, setFilteredData] = useState([])
  const [collapsed, setCollapsed] = useState(true)
  const [showCreateQuotation, setShowCreateQuotation] = useState(false)

  const handleSubmit = () => {
    setOpen(!open)
  }

  const handleOpenQuotation = () => {
    setShowCreateQuotation(true)
  }

  const handleCloseQuotation = () => {
    setShowCreateQuotation(false)
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
    <Card sx={{ position: 'relative', marginTop: 3, marginLeft: 3, padding: 2 }}>
      <CardHeader
        title='Milestones'
        action={
          <IconButton
            size='small'
            aria-label='collapse'
            sx={{ color: 'text.secondary' }}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon fontSize={20} icon={!collapsed ? 'tabler:chevron-down' : 'tabler:chevron-up'} />
          </IconButton>
        }
      />
      <Collapse in={collapsed}>
        <DataGrid
          autoHeight
          slots={{ toolbar: MileStoneToolbar }}
          rows={filteredData.length ? filteredData : data}
          columns={columns.map(col => ({
            ...col,
            renderCell: params => {
              if (col.field === 'actions') {
                return (
                  <div>
                    <IconButton>
                      <SaveIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={handleOpenQuotation}>
                      <DoneIcon />
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
      <Dialog open={showCreateQuotation} onClose={handleCloseQuotation} fullScreen scroll='body'>
        <CreateQuotation handleCloseQuotation={handleCloseQuotation} onClose={handleCloseQuotation} />
      </Dialog>

      {/* {showCreateQuotation && <CreateQuotation onClose={handleCloseQuotation} />} */}
    </Card>
  )
}

export default LeadMileStoneTable
