import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  MenuItem,
  Autocomplete,
  Paper
} from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import * as yup from 'yup'
import { useFormik } from 'formik'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'

const ProductForm = ({ open, handleClose }) => {
  const validationSchema = yup.object().shape({
    type: yup.string().required('*required'),
    title: yup.string().required('*required'),
    mrp: yup.string().required('*required'),
    description: yup.string().required('*required'),
    hsn: yup.string().required('*required')
  })

  const initialValues = {
    type: '',
    title: '',
    hsn: '',
    description: '',
    mrp: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: function (values) {
      console.log('values', values)

      // const formData = new FormData()
      // formData.append('type', values.type)
      // formData.append('title', values.title)
      // formData.append('hsn', values.hsn)
      // formData.append('description', values.description)
      // formData.append('mrp', values.mrp)
    }
  })

  const handleReset = formik => {
    formik.resetForm()
  }

  const top100Films = [
    {
      label: 'Product'
    },
    {
      label: 'Service'
    }
  ]

  const products = [{ label: 'CRM' }, { label: 'Team Sync' }]

  return (
    <div>
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

        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={3}
            sx={{
              padding: 4
            }}
          >
            <Grid item xs={4}>
              <Autocomplete
                disablePortal
                id='combo-box-demo'
                options={products}
                sx={{ width: 300 }}
                renderInput={params => <TextField {...params} label='Status' />}
                PaperComponent={({ children }) => (
                  <Paper style={{ maxHeight: 200, overflow: 'auto' }}>{children}</Paper>
                )}
                style={{ width: '100%' }}
              />
            </Grid>

            <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
              <TextField
                id='outlined-basic'
                label='Title'
                variant='outlined'
                name='title'
                fullWidth
                inputProps={{ autoComplete: 'off' }}
              />
            </Grid>
            <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
              <TextField
                id='outlined-basic'
                label='HSN'
                variant='outlined'
                name='hsn'
                fullWidth
                inputProps={{ autoComplete: 'off' }}
              />
            </Grid>
            <Grid item xs={8} sx={{ marginTop: '0.3rem' }}>
              <TextField
                id='outlined-basic'
                label='Description'
                variant='outlined'
                name='description'
                fullWidth
                inputProps={{ autoComplete: 'off' }}
              />
            </Grid>
            <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
              <TextField
                id='outlined-basic'
                label='MRP'
                variant='outlined'
                name='mrp'
                fullWidth
                inputProps={{ autoComplete: 'off' }}
              />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '0.3rem', padding: 0, textAlign: 'right' }}>
              <Button type='submit' variant='contained' onClick={formik.handleSubmit} endIcon={<DoneIcon />}>
                Submit
              </Button>
              <Button
                type='reset'
                variant='contained'
                sx={{ marginLeft: '0.5rem' }}
                onClick={() => handleReset(formik)}
                endIcon={<CloseIcon />}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Dialog>
    </div>
  )
}

export default ProductForm
