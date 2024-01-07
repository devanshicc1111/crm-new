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
