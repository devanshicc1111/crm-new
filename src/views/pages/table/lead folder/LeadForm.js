import React, { useEffect } from 'react'

import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip, IconButton, Grid, Button, TextField, Autocomplete, Dialog } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { GridCloseIcon } from '@mui/x-data-grid'

const statusS = ['NEW', 'UPSIDE', 'STRONG UPSIDE', 'COMMIT', 'LOST']

const LeadForm = props => {
  const { handleNext, open, handleClose, editdata } = props

  const initialValues = {
    account: '',
    status: '',
    leadTitle: '',
    description: ''
  }

  const validationSchema = Yup.object().shape({
    account: Yup.string().required('Account is required'),
    status: Yup.string().required('Status is required'),
    leadTitle: Yup.string().required('Lead Title is required'),
    description: Yup.string()
      .notRequired() // Makes the field not required
      .max(100, 'Description must not exceed 100 characters')
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: function (values) {
      handleNext()
    }
  })
  const leadAccount = []

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Autocomplete
                name='account'
                disablePortal
                id='combo-box-demo'
                size='small'
                value={formik.values.account || ''}
                options={leadAccount}
                onChange={(e, newValue) => {
                  newValue ? formik.setFieldValue('account', newValue) : formik.setFieldValue('account', '')
                }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label='ACCOUNT'
                    error={formik.touched.account && Boolean(formik.errors.account)}
                    helperText={formik.touched.account && formik.errors.account}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='leadTitle'
                id='outlined-basic'
                label='LEAD TITLE'
                variant='outlined'
                autoComplete='off'
                size='small'
                onChange={formik.handleChange}
                value={formik.values.leadTitle}
                error={formik.touched.leadTitle && Boolean(formik.errors.leadTitle)}
                helperText={formik.touched.leadTitle && formik.errors.leadTitle}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name='description'
                id='outlined-basic'
                label='LEAD DESCRIPTION'
                variant='outlined'
                autoComplete='off'
                onChange={formik.handleChange}
                value={formik.values.description}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            endIcon={<CloseIcon />}
            onClick={() => formik.handleReset()}
            className='reset-button'
            type='reset'
            variant='contained'
            color='primary'
            disableElevation
          >
            RESET
          </Button>
          <Button
            endIcon={<DoneIcon />}
            className='save-button'
            type='submit'
            variant='contained'
            color='primary'
            disableElevation
            style={{ backgroundColor: ' #FFAF38', color: 'black' }}
            onClick={props.handleNext}
          >
            SUBMIT
          </Button>
        </DialogActions>
      </form>
    </>
  )
}

export default LeadForm
