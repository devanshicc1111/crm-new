import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { CloudUpload, Done } from '@mui/icons-material'
import * as yup from 'yup'
import { useFormik } from 'formik'

const PointDataForm = ({ open, setOpen }) => {
  const validationSchema = yup.object({
    name: yup.string().required(),
    date: yup.string().required(),
    time: yup.string().required(),
    location: yup.string().required()
  })

  const initialValues = {
    name: '',
    date: '',
    time: '',
    location: '',
    description: ''
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: function (values) {
      console.log('values', values)
      const formData = new FormData()
      formData.append(uploadimg)
      formData.append(values.name)
      formData.append(values.date)
      formData.append(values.time)
      formData.append(values.location)
      formData.append(values.description)
    }
  })

  const fileChange = e => {
    e.preventDefault()
    const file = e.target.files[0]
    if (file) {
      setUploadimg(file)
    }
  }

  return (
    <Dialog maxWidth={'md'} onClose={() => setOpen(false)} open={open}>
      <DialogTitle>
        <h3>ADD POINT DATA</h3>
      </DialogTitle>
      <IconButton
        aria-label='close'
        onClick={() => setOpen(false)}
        sx={{
          position: 'absolute',
          right: 8,
          top: 10,
          color: theme => theme.palette.grey[500]
        }}
      >
        <CloseIcon />
      </IconButton>

      <form onSubmit={formik.handleSubmit}>
        <DialogContent dividers>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                label='Name'
                size='small'
                fullWidth
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name='date'
                value={formik.values.date}
                onChange={formik.handleChange}
                type='date'
                size='small'
                fullWidth
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name='time'
                value={formik.values.time}
                onChange={formik.handleChange}
                type='time'
                size='small'
                fullWidth
                error={formik.touched.time && Boolean(formik.errors.time)}
                helperText={formik.touched.time && formik.errors.time}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='location'
                value={formik.values.location}
                onChange={formik.handleChange}
                label='Location'
                size='small'
                fullWidth
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='description'
                value={formik.values.description}
                onChange={formik.handleChange}
                label='Description'
                size='small'
                multiline
                minRows={3}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <Button component='label' variant='outlined' startIcon={<CloudUpload />}>
                Upload Images
                <input
                  style={{ display: 'none' }}
                  name='uploadimg'
                  type='file'
                  accept='image/*'
                  onChange={fileChange}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type='submit' variant='contained' endIcon={<Done />}>
            REPORT
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default PointDataForm
