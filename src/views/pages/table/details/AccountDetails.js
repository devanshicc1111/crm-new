import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
  InputLabel,
  TextField,
  Typography
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { GridCloseIcon } from '@mui/x-data-grid'

import * as yup from 'yup'

import { Formik, Field, Form } from 'formik'

const initialValues = {
  AccountName: '',
  AccountOwner: '',
  Country: '',
  City: '',
  FirstAddress: '',
  SecondAddress: '',
  Phone: '',
  Email: '',
  Description: ''
}

const validationSchema = yup.object({
  AccountName: yup.string().required('Account Name  is required'),
  AccountOwner: yup.string().required('Account Owner is required'),
  Country: yup.string().required('Country is required'),
  City: yup.string().required('City is required'),
  FirstAddress: yup.string().required('FirstAddress is required'),
  SecondAddress: yup.string().required('SecondAddress is required'),
  Phone: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  Email: yup.string().email('Please enter a valid email').required('Email is required'),
  Description: yup.string().required('Description is required')
})

const AccountDetails = ({ open, handleClose, handleDialogSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleDialogSubmit}>
      {(values, errors, touched, handleChange, handleDialogSubmit) => (
        <Form onSubmit={handleDialogSubmit}>
          <Field>
            {({ field, form }) => (
              <Dialog
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                open={open}

                // onClose={() => {
                //   formik.resetForm()
                //   handleClose()
                // }}
              >
                <DialogTitle sx={{ p: 2, paddingLeft: '0.9rem', fontSize: '1.5rem' }} id='customized-dialog-title'>
                  CREATE ACCOUNT
                </DialogTitle>
                <IconButton
                  aria-label='close'
                  onClick={() => {
                    values.resetForm()
                    handleClose()
                  }}
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
                    <TextField
                      id='outlined-basic'
                      label='Account Name'
                      variant='outlined'
                      name='AccountName'
                      fullWidth
                      isInvalid={form.error?.AccountName && form.touched?.AccountName}
                      helperText={form.errors?.AccountName}
                      {...field}
                      value={values.AccountName}
                      onChange={handleChange}
                      error={errors?.AccountName && touched?.AccountName}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id='outlined-basic'
                      label='Account Owner'
                      variant='outlined'
                      name='AccountOwner'
                      fullWidth
                      isInvalid={form.error?.AccountOwner && form.touched?.AccountOwner}
                      helperText={form.errors?.AccountOwner}
                      {...field}
                      value={values.AccountOwner}
                      onChange={handleChange}
                      error={errors?.AccountOwner && touched?.AccountOwner}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
                    <TextField
                      id='outlined-basic'
                      label='Country'
                      variant='outlined'
                      name='Country'
                      fullWidth
                      isInvalid={form.error?.Country && form.touched?.Country}
                      helperText={form.errors?.Country}
                      {...field}
                      value={values.Country}
                      onChange={handleChange}
                      error={errors?.Country && touched?.Country}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
                    <TextField
                      id='outlined-basic'
                      label='City'
                      variant='outlined'
                      name='City'
                      fullWidth
                      isInvalid={form.error?.City && form.touched?.City}
                      helperText={form.errors?.City}
                      {...field}
                      value={values.City}
                      onChange={handleChange}
                      error={errors?.City && touched?.City}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
                    <TextField
                      id='outlined-basic'
                      label='First Address'
                      variant='outlined'
                      name='FirstAddress'
                      fullWidth
                      isInvalid={form.error?.FirstAddress && form.touched?.FirstAddress}
                      helperText={form.errors?.FirstAddress}
                      {...field}
                      value={values.FirstAddress}
                      onChange={handleChange}
                      error={errors?.FirstAddress && touched?.FirstAddress}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
                    <TextField
                      id='outlined-basic'
                      label='Second Address'
                      variant='outlined'
                      name='SecondAddress'
                      fullWidth
                      isInvalid={form.error?.SecondAddress && form.touched?.SecondAddress}
                      helperText={form.errors?.SecondAddress}
                      {...field}
                      value={values.SecondAddress}
                      onChange={handleChange}
                      error={errors?.SecondAddress && touched?.SecondAddress}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
                    <TextField
                      id='outlined-basic'
                      label='Phone '
                      variant='outlined'
                      name='Phone '
                      fullWidth
                      isInvalid={form.error?.Phone && form.touched?.Phone}
                      helperText={form.errors?.Phone}
                      {...field}
                      value={values.Phone}
                      onChange={handleChange}
                      error={errors?.Phone && touched?.Phone}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
                    <TextField
                      id='outlined-basic'
                      label='Email'
                      variant='outlined'
                      name='Email'
                      fullWidth
                      isInvalid={form.error?.Email && form.touched?.Email}
                      helperText={form.errors?.Email}
                      {...field}
                      value={values.Email}
                      onChange={handleChange}
                      error={errors?.Email && touched?.Email}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>
                    <TextField
                      id='outlined-basic'
                      label='Description'
                      variant='outlined'
                      name='Description'
                      fullWidth
                      isInvalid={form.error?.Description && form.touched?.Description}
                      helperText={form.errors?.Description}
                      {...field}
                      value={values.Description}
                      onChange={handleChange}
                      error={errors?.Description && touched?.Description}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: '0.3rem', padding: 0, textAlign: 'right' }}>
                    <Button variant='contained' onClick={handleDialogSubmit} type='Submit'>
                      Submit
                    </Button>
                    <Button variant='contained' sx={{ marginLeft: '1rem' }}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Dialog>
            )}
          </Field>
        </Form>
      )}
    </Formik>
  )
}

export default AccountDetails
