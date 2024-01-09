// ** MUI Imports
import Box from '@mui/material/Box'
import { GridToolbarFilterButton } from '@mui/x-data-grid'

const Filter = props => {
  return (
    <Box
      sx={{
        gap: 2,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: theme => theme.spacing(2, 5, 4, 5),
        position: 'absolute',
        top: '-56px',
        zIndex: '1000',
        marginLeft: '49rem'
      }}
    >
      <GridToolbarFilterButton />
    </Box>
  )
}

export default Filter
