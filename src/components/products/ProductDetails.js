import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, Grid, IconButton, TextField } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'

const ProductDetails = ({ open, handleClose, handleDialogSubmit }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle sx={{ p: 2, paddingLeft: '0.9rem', fontSize: '1.5rem' }} id='customized-dialog-title'>
        CREATE - PRODUCT/SERVICE
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 7,
          color: theme => theme.palette.grey[500]
        }}
      >
        <GridCloseIcon />
      </IconButton>

      <Grid
        container
        spacing={3}
        sx={{
          padding: 4
        }}
      >
        <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Type' variant='outlined' name='Type' fullWidth />
        </Grid>
        <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Title' variant='outlined' name='Title' fullWidth />
        </Grid>
        <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='HSN' variant='outlined' name='HSN' fullWidth />
        </Grid>
        <Grid item xs={8} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Email' variant='outlined' name='Email' fullWidth />
        </Grid>
        <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Phone No' variant='outlined' name='Phone No' fullWidth />
        </Grid>

        <Grid item xs={12} sx={{ marginTop: '0.3rem', padding: 0, textAlign: 'right' }}>
          <Button variant='contained' onClick={handleDialogSubmit}>
            Submit
          </Button>
          <Button variant='contained' sx={{ marginLeft: '0.5rem' }}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default ProductDetails
