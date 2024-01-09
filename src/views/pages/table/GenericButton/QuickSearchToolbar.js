// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { GridToolbarFilterButton } from '@mui/x-data-grid'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const QuickSearchToolbar = props => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        p: theme => theme.spacing(2, 5, 4, 5),
        position: 'absolute',
        right: 110,
        zIndex: '1000',
        top: '-54px'
      }}
    >
      <div>
        <CustomTextField
          value={props.value}
          placeholder='Search…'
          onChange={props.onChange}
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 4, display: 'flex' }}>
                <Icon fontSize='1.25rem' icon='tabler:search' sx={{ mr: 2 }} />
              </Box>
            ),
            endAdornment: (
              <IconButton size='small' title='Clear' aria-label='Clear' onClick={props.clearSearch}>
                <Icon fontSize='1.25rem' icon='tabler:x' />
              </IconButton>
            )
          }}
          sx={{
            width: {
              xs: 1,
              sm: 'auto'
            },
            '& .MuiInputBase-root > svg': {
              mr: 2
            }
          }}
        />
      </div>

      <GridToolbarFilterButton />
    </Box>
  )
}

export default QuickSearchToolbar

// const LeadProductTable = () => {
//   // ** State
//   const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
//   const [open, setOpen] = useState(false)
//   const [openDialog, setOpenDialog] = useState(false)
//   const [tableCollapsed, setTableCollapsed] = useState(true)
//   const [searchText, setSearchText] = useState('')
//   const [data] = useState(rows)
//   const [filteredData, setFilteredData] = useState([])
//   const [collapsed, setCollapsed] = useState(true)

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

//   const handleDialogSubmit = () => {
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
//     <Card sx={{ position: 'relative', marginTop: 3, marginLeft: 3, padding: 2 }}>
//       <CardHeader
//         title='Cart'
//         action={
//           <IconButton
//             size='small'
//             aria-label='collapse'
//             sx={{ color: 'text.secondary' }}
//             onClick={() => setCollapsed(!collapsed)}
//           >
//             <Icon fontSize={20} icon={!collapsed ? 'tabler:chevron-down' : 'tabler:chevron-up'} />
//           </IconButton>
//         }
//       />
//       <Collapse in={collapsed}>
//         <DataGrid
//           autoHeight
//           slots={{ toolbar: QuickSearchToolbar }}
//           rows={filteredData.length ? filteredData : data}
//           columns={columns.map(col => ({
//             ...col,
//             renderCell: params => {
//               if (col.field === 'actions') {
//                 return (
//                   <div>
//                     <IconButton>
//                       <SaveIcon />
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

// export default LeadProductTable
