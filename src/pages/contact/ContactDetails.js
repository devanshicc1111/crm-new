import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle, Grid, IconButton, TextField } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'

const ContactDetails = ({ open, handleClose, handleDialogSubmit }) => {
  return (
    <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle sx={{ p: 2, paddingLeft: '0.9rem', fontSize: '1.5rem' }} id='customized-dialog-title'>
        CREATE
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
        <Grid item xs={6}>
          <TextField id='outlined-basic' label='Contact Name' variant='outlined' name='Contact Name' fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField id='outlined-basic' label='Account' variant='outlined' name='Account' fullWidth />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Deparment' variant='outlined' name='Deparment' fullWidth />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Designation' variant='outlined' name='Designation' fullWidth />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Email' variant='outlined' name='Email' fullWidth />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Phone No' variant='outlined' name='Phone No' fullWidth />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Description' variant='outlined' name='Description' fullWidth />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>
          <TextField id='outlined-basic' label='Add Note' variant='outlined' name='Add Note' fullWidth />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '0.3rem', padding: 0, textAlign: 'right' }}>
          <Button variant='contained' onClick={handleDialogSubmit}>
            Submit
          </Button>
          <Button variant='contained' sx={{ marginLeft: '1rem' }}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default ContactDetails
