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
  Autocomplete
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
            <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
              <Autocomplete
                disablePortal
                id='combo-box-demo'
                options={top100Films}
                name='type'
                value={formik.values.type}
                onChange={(event, newValue) => formik.setFieldValue('type', newValue)}
                renderInput={params => (
                  <TextField
                    {...params}
                    label='Type'
                    error={formik.touched.type && Boolean(formik.errors.type)}
                    helperText={formik.touched.type && formik.errors.type}
                    fullWidth
                  />
                )}
              />
            </Grid>

            <Grid item xs={4} sx={{ marginTop: '0.3rem' }}>
              <TextField
                id='outlined-basic'
                label='Title'
                variant='outlined'
                name='title'
                fullWidth
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
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
                value={formik.values.hsn}
                onChange={formik.handleChange}
                error={formik.touched.hsn && Boolean(formik.errors.hsn)}
                helperText={formik.touched.hsn && formik.errors.hsn}
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
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
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
                value={formik.values.mrp}
                onChange={formik.handleChange}
                error={formik.touched.mrp && Boolean(formik.errors.mrp)}
                helperText={formik.touched.mrp && formik.errors.mrp}
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
