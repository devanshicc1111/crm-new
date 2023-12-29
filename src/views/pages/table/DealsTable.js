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
import { Fab, Tooltip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

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
    avatar: '8.png',
    full_name: "Korrie O'Crevy",
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    phone: 9823456712,
    start_date: '09/23/2016',
    salary: 23896.35,
    age: '61',
    experience: '1 Year',
    status: 2
  },
  {
    id: 7,
    avatar: '',
    full_name: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    phone: 9823456712,
    start_date: '10/15/2017',
    salary: 18991.67,
    age: '59',
    experience: '9 Years',
    status: 3
  },
  {
    id: 11,
    avatar: '',
    full_name: 'De Falloon',
    post: 'Sales Representative',
    email: 'dfalloona@ifeng.com',
    city: 'Colima',
    phone: 9823456712,
    start_date: '06/12/2018',
    salary: 19252.12,
    age: '30',
    experience: '0 Year',
    status: 4
  },
  {
    id: 3,
    avatar: '7.png',
    full_name: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    phone: 9823456712,
    start_date: '03/24/2018',
    salary: 13076.28,
    age: '66',
    experience: '6 Years',
    status: 5
  },
  {
    id: 5,
    avatar: '',
    full_name: 'Harmonia Nisius',
    post: 'Senior Cost Accountant',
    email: 'hnisius4@gnu.org',
    city: 'Lucan',
    phone: 9823456712,
    start_date: '08/25/2017',
    salary: 10909.52,
    age: '33',
    experience: '3 Years',
    status: 2
  },
  {
    id: 6,
    avatar: '',
    full_name: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    phone: 9823456712,
    start_date: '06/01/2017',
    salary: 17803.8,
    age: '61',
    experience: '1 Year',
    status: 1
  },
  {
    id: 4,
    avatar: '8.png',
    full_name: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    phone: 9823456712,
    start_date: '12/03/2017',
    salary: 12336.17,
    age: '22',
    experience: '2 Years',
    status: 2
  },
  {
    id: 8,
    avatar: '7.png',
    full_name: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    phone: 9823456712,
    start_date: '11/05/2016',
    salary: 19230.13,
    age: '55',
    experience: '5 Years',
    status: 3
  },
  {
    id: 9,
    avatar: '2.png',
    full_name: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    phone: 9823456712,
    start_date: '12/29/2018',
    salary: 11677.32,
    age: '39',
    experience: '9 Years',
    status: 5
  },
  {
    id: 10,
    avatar: '7.png',
    full_name: 'Merline Penhalewick',
    post: 'Junior Executive',
    email: 'mpenhalewick9@php.net',
    city: 'Kanuma',
    phone: 9823456712,
    start_date: '04/19/2019',
    salary: 15939.52,
    age: '23',
    experience: '3 Years',
    status: 2
  },
  {
    id: 12,
    avatar: '',
    full_name: 'Cyrus Gornal',
    post: 'Senior Sales Associate',
    email: 'cgornalb@fda.gov',
    city: 'Boro Utara',
    phone: 9823456712,
    start_date: '12/09/2017',
    salary: 16745.47,
    age: '22',
    experience: '2 Years',
    status: 4
  },
  {
    id: 13,
    avatar: '',
    full_name: 'Tallou Balf',
    post: 'Staff Accountant',
    email: 'tbalfc@sina.com.cn',
    city: 'Siliana',
    phone: 9823456712,
    start_date: '01/21/2016',
    salary: 15488.53,
    age: '36',
    experience: '6 Years',
    status: 4
  },
  {
    id: 14,
    avatar: '',
    full_name: 'Othilia Extill',
    post: 'Associate Professor',
    email: 'oextilld@theatlantic.com',
    city: 'Brzyska',
    phone: 9823456712,
    start_date: '02/01/2016',
    salary: 18442.34,
    age: '43',
    experience: '3 Years',
    status: 2
  },
  {
    id: 15,
    avatar: '',
    full_name: 'Wilmar Bourton',
    post: 'Administrative Assistant',
    email: 'wbourtone@sakura.ne.jp',
    city: 'Bích Động',
    phone: 9823456712,
    start_date: '04/25/2018',
    salary: 13304.45,
    age: '19',
    experience: '9 Years',
    status: 5
  }
]

const columns = [
  {
    flex: 0.25,
    minWidth: 290,
    field: 'full_name',
    headerName: 'Account Name',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.full_name}
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
    type: 'phone',
    minWidth: 120,
    headerName: 'Phone',
    field: 'phone',
    valueGetter: params => new Date(params.value),
    renderCell: params => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.phone}
      </Typography>
    )
  },

  {
    flex: 0.175,
    minWidth: 140,
    field: 'account_owner',
    headerName: 'Account Owner',
    renderCell: params => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}

          <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
            {row.full_name}
          </Typography>
        </Box>
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

const DealsTable = () => {
  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })

  return (
    <Card>
      <CardHeader
        title='Selection'
        action={
          <div>
            <div className='PaIconCon'>
              <Tooltip title='CREATE ACCOUNT'>
                <span>
                  <Fab
                    style={{
                      width: '2.2rem',
                      height: '.1rem',
                      backgroundColor: '#7367F0'
                    }}
                    // onClick={handleSubmit}
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
        columns={columns}
        checkboxSelection
        pageSizeOptions={[7, 10, 25, 50]}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
    </Card>
  )
}

export default DealsTable
