import React, { useState, useEffect } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip, IconButton, Grid, Button, Autocomplete, Paper } from '@mui/material'
import TextField from '@mui/material/TextField'

function MilestoneForm(props) {
  const { handleClose } = props

  const status = [
    { label: 'New' },
    { label: 'Upside' },
    { label: 'Strong Upside' },
    { label: 'Commit' },
    { label: 'Won' },
    { label: 'Lost' }
  ]

  return (
    <>
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
        <div style={{ fontSize: '80%' }}>CREATE MILESTONE</div>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Autocomplete
              disablePortal
              id='combo-box-demo'
              options={status}
              sx={{ width: 300 }}
              renderInput={params => <TextField {...params} label='Status' />}
              PaperComponent={({ children }) => <Paper style={{ maxHeight: 200, overflow: 'auto' }}>{children}</Paper>}
              style={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField id='outlined-basic' label='Quantity' variant='outlined' type='number' />
          </Grid>
          <Grid item xs={4}>
            <TextField id='outlined-basic' label='Cost' variant='outlined' />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button type='reset' variant='contained' sx={{ marginLeft: '0.5rem' }}>
          Submit
        </Button>
      </DialogActions>
    </>
  )
}

export default MilestoneForm
