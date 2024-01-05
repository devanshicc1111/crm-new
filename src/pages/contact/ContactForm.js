import { useState } from 'react'
import { Button, Dialog, DialogTitle, Grid, Icon, IconButton, TextField, Tooltip } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'

import * as Yup from 'yup'
import { useFormik } from 'formik'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import MultipleArray from './MutipleArray'
const ContactForm = ({ open, handleClose, handleSubmit }) => {
  // const [ContactName, setContactName] = useState('')
  const formValidation = () => {}

  const initialValues = {
    contactName: '',
    account: '',
    department: '',
    designation: '',
    email: '',
    phoneNo: '',
    description: '',
    addNote: ''
  }

  const validationSchema = Yup.object({
    contactName: Yup.string().required('Contact Name is required'),
    account: Yup.string().required('Account is required'),
    department: Yup.string().required('Department is required'),
    designation: Yup.string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'invalid Email')
      .required('Designation is required'),
    email: Yup.string().email('Please enter a valid email').required('Email is required'),
    phoneNo: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    description: Yup.string().required('Description is required'),
    addNote: Yup.string().required('Description is addNote')
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: function (values) {
      console.log('values', values)
    }
  })

  const handleReset = formik => {
    formik.resetForm()
  }
  return (
    <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle sx={{ p: 2, paddingLeft: '0.9rem', fontSize: '1.5rem' }} id='customized-dialog-title'>
        CREATE ACCOUNT
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

      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}
          sx={{
            padding: 4
          }}
        >
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              label='Contact Name'
              variant='outlined'
              name='contactName'
              fullWidth
              // initialValues={ContactName}
              validationSchema={formValidation}
              onChange={formik.handleChange}
              value={formik.values.contactName}
              error={formik.touched.contactName && Boolean(formik.errors.contactName)}
              helperText={formik.touched.contactName && formik.errors.contactName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              label='Account'
              variant='outlined'
              name='account'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.account}
              error={formik.touched.account && Boolean(formik.errors.account)}
              helperText={formik.touched.account && formik.errors.account}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='department'
              variant='outlined'
              name='department'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.department}
              error={formik.touched.department && Boolean(formik.errors.department)}
              helperText={formik.touched.department && formik.errors.department}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='Designation'
              variant='outlined'
              name='designation'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.designation}
              error={formik.touched.designation && Boolean(formik.errors.designation)}
              helperText={formik.touched.designation && formik.errors.designation}
            />
          </Grid>

          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              name='email'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='Phone No'
              variant='outlined'
              name='phoneNo'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.phoneNo}
              error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
              helperText={formik.touched.phoneNo && formik.errors.phoneNo}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='Description'
              variant='outlined'
              name='description'
              fullWidth
              onChange={formik.handleChange}
              value={formik.values.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>
            <MultipleArray />
          </Grid>

          <Grid item xs={12} sx={{ marginTop: '0.3rem', padding: 0, textAlign: 'right' }}>
            <Button variant='contained' onClick={formik.handleSubmit} type='submit' endIcon={<DoneIcon />}>
              Submit
            </Button>
            <Button
              variant='contained'
              sx={{ marginLeft: '1rem' }}
              onClick={() => handleReset(formik)}
              endIcon={<CloseIcon />}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  )
}

export default ContactForm
