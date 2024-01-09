import { Button, Dialog, DialogTitle, FormControl, Grid, IconButton, TextField } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import * as yup from 'yup'
import { useFormik } from 'formik'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'

const initialValues = {
  accountName: '',
  accountOwner: '',
  country: '',
  city: '',
  firstAddress: '',
  secondAddress: '',
  phone: '',
  email: '',
  description: ''
}

const validationSchema = yup.object({
  accountName: yup.string().required('Account Name  is required'),
  accountOwner: yup.string().required('Account Owner is required'),
  country: yup.string().required('Country is required'),
  city: yup.string().required('City is required'),
  firstAddress: yup.string().required('FirstAddress is required'),
  secondAddress: yup.string().required('SecondAddress is required'),
  phone: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  description: yup.string().required('Description is required')
})

const AccountForm = ({ open, handleClose, handleSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: function (values) {
      console.log('values', values)
      handleClose()
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
        onClick={() => {
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
              label='Account Name'
              variant='outlined'
              name='accountName'
              fullWidth
              value={formik.values.accountName}
              onChange={formik.handleChange}
              error={formik.touched.accountName && Boolean(formik.errors.accountName)}
              helperText={formik.touched.accountName && formik.errors.accountName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              label='Account Owner'
              variant='outlined'
              name='accountOwner'
              fullWidth
              value={formik.values.accountOwner}
              onChange={formik.handleChange}
              error={formik.touched.accountOwner && Boolean(formik.errors.accountOwner)}
              helperText={formik.touched.accountOwner && formik.errors.accountOwner}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='country'
              variant='outlined'
              name='country'
              fullWidth
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='City'
              variant='outlined'
              name='city'
              fullWidth
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='First Address'
              variant='outlined'
              name='firstAddress'
              fullWidth
              value={formik.values.firstAddress}
              onChange={formik.handleChange}
              error={formik.touched.firstAddress && Boolean(formik.errors.firstAddress)}
              helperText={formik.touched.firstAddress && formik.errors.firstAddress}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='Second Address'
              variant='outlined'
              name='secondAddress'
              fullWidth
              value={formik.values.secondAddress}
              onChange={formik.handleChange}
              error={formik.touched.secondAddress && Boolean(formik.errors.secondAddress)}
              helperText={formik.touched.secondAddress && formik.errors.secondAddress}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='Phone '
              variant='outlined'
              name='phone'
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              name='email'
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>
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
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '0.3rem', padding: 0, textAlign: 'right' }}>
            <Button variant='contained' onClick={formik.handleSubmit} type='Submit' endIcon={<DoneIcon />}>
              Submit
            </Button>
            <Button
              onClick={() => handleReset(formik)}
              variant='contained'
              sx={{ marginLeft: '1rem' }}
              type='reset'
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

export default AccountForm
