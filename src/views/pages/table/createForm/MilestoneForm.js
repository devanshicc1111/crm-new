import React, { useState, useEffect } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip, IconButton, Grid, Button, Autocomplete } from '@mui/material'
import TextField from '@mui/material/TextField'
import { Formik, Field, FieldArray } from 'formik'

function MilestoneForm(props) {
  const { handleClose } = props

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
              name='status'
              disablePortal
              id='combo-box-demo'
              size='small'
              value={formik.values.status || ''}
              options={statusS}
              onChange={(e, newValue) => {
                newValue ? formik.setFieldValue('status', newValue) : formik.setFieldValue('status', '')
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  label='STATUS'
                  error={formik.touched.status && Boolean(formik.errors.status)}
                  helperText={formik.touched.status && formik.errors.status}
                />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField id='outlined-basic' label='Quantity' variant='outlined' />
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
