import React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip, IconButton, Grid, Button } from '@mui/material'

import TextField from '@mui/material/TextField'

function MilestoneDetail(props) {
  const { handleCloseMilestone } = props
  return (
    <>
      <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
        <Tooltip title='CLOSE'>
          <IconButton
            onClick={() => handleCloseMilestone()}
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
        MILESTONE DETAILS
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField size='small' label='Product' type='text' />
          </Grid>
          <Grid item xs={4}>
            <TextField size='small' label='Unit' type='number' />
          </Grid>
          <Grid item xs={4}>
            <TextField size='small' label='Total Cost' type='text' />
          </Grid>
        </Grid>
      </DialogContent>
    </>
  )
}

export default MilestoneDetail
