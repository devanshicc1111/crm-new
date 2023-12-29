// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { GridToolbarFilterButton } from '@mui/x-data-grid'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { Collapse } from '@mui/material'
import { Fab, Tooltip } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import AddIcon from '@mui/icons-material/Add'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import MilestoneForm from '../createForm/MilestoneForm'
import AddProductsForm from '../createForm/AddProductsForm'

const AddProducts = props => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {' '}
      <div>
        <Box
          sx={{
            gap: 2,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: theme => theme.spacing(2, 5, 4, 5)
          }}
        >
          {/* <Typography variant='h5'>Cart</Typography> */}

          <div>
            <CustomTextField
              value={props.value}
              placeholder='Search…'
              onChange={props.onChange}
              InputProps={{
                startAdornment: (
                  <Box sx={{ mr: 2, display: 'flex' }}>
                    <Icon fontSize='1.25rem' icon='tabler:search' />
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
          <div className='PaIconCon'>
            <Tooltip title='Add Product'>
              <span>
                <Fab
                  style={{
                    width: '2.2rem',
                    height: '.1rem',
                    backgroundColor: '#7367F0'
                  }}
                  onClick={handleOpen}
                >
                  <AddIcon style={{ fontSize: '19', color: '#fff' }} />
                </Fab>
              </span>
            </Tooltip>
          </div>
        </Box>
      </div>
      <div>
        <Dialog onClose={handleClose} className='dialofAction' open={open} aria-labelledby='draggable-dialog-title'>
          <AddProductsForm handleClose={handleClose} />
        </Dialog>
      </div>
    </>
  )
}

export default AddProducts
