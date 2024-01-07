import React from 'react'
import { Tooltip, IconButton, Grid, Button, Autocomplete, Paper } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'

function AddProductsForm(props) {
  const { handleClose } = props

  const products = [{ label: 'CRM' }, { label: 'Team Sync' }, { label: 'newPA' }]

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
              size='small'
              disablePortal
              id='combo-box-demo'
              options={products}
              sx={{ width: 300 }}
              renderInput={params => <TextField {...params} label='Status' />}
              PaperComponent={({ children }) => <Paper style={{ maxHeight: 200, overflow: 'auto' }}>{children}</Paper>}
              style={{ width: '100%' }}
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
        <Button onClick={handleClose} type='reset' variant='contained' sx={{ marginLeft: '0.5rem' }}>
          Submit
        </Button>
      </DialogActions>
    </div>
  )
}

export default AddProductsForm
