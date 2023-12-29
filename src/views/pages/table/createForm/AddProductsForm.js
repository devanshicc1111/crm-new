import React from 'react'
import { Tooltip, IconButton, Grid, Button, Autocomplete } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'

function AddProductsForm(props) {
  return (
    <div>
      <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
        <Tooltip title='CLOSE'>
          <IconButton
            onClick={() => handleClose()}
            aria-label='close'
            style={{
              position: 'absolute',
              right: '8px',
              top: '8px'
            }}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <div style={{ fontSize: '80%' }}>ADD PRODUCTS</div>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Autocomplete
              name='status'
              disablePortal
              id='combo-box-demo'
              size='small'
              renderInput={params => <TextField {...params} label='Product/Service' />}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField size='small' type='number' id='outlined-basic' label='Quantity' variant='outlined' />
          </Grid>
          <Grid item xs={4}>
            <TextField size='small' id='outlined-basic' label='Cost' variant='outlined' />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button type='reset' variant='contained' sx={{ marginLeft: '0.5rem' }}>
          Submit
        </Button>
      </DialogActions>
    </div>
  )
}

export default AddProductsForm
