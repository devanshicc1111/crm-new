import React, { useRef, useState } from 'react'
import {
  Autocomplete,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Tooltip
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { CloudUpload, Done } from '@mui/icons-material'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import * as Yup from 'yup'
import axios from 'axios'
import _debounce from 'lodash/debounce'

const RegisterPoIForm = ({ open, setOpen }) => {
  const [uploadimg, setUploadimg] = useState(null)
  const idtypeData = ['Aadhaar', 'PAN Card ', 'Passport', 'Voter ID ']
  const genderdata = ['Male', 'Female', 'Others']
  let empty = { address: '' }
  const formikRef = useRef(null)

  const fileChange = e => {
    e.preventDefault()
    const file = e.target.files[0]
    if (file) {
      setUploadimg(file)
    }
  }

  const [chipData, setChipData] = useState([])

  // Your alias conversion function
  const convertToChip = input => {
    return { label: input }
  }

  const addChip = input => {
    // Check if the input contains non-space characters
    const isNonSpaceInput = input.trim() !== ''

    // Add the chip only if the input is not just spaces
    if (isNonSpaceInput) {
      const chipValue = convertToChip(input.trim())
      setChipData(prevChips => [...prevChips, chipValue])
      formikRef.current.setFieldValue('alias', '')
    }
  }

  const debouncedAddChip = _debounce(addChip, 1000) //

  return (
    <Dialog fullScreen onClose={() => setOpen(false)} aria-labelledby='customized-dialog-title' open={open}>
      <DialogTitle fontSize={20}>REGISTER POI</DialogTitle>
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

      <Formik
        initialValues={{
          arrayaddresh: [empty],
          name: '',
          gender: '', // Update name to 'gender'
          date: '',
          alias: '',
          height: '',
          eyecolor: '',
          idType: '',
          idNumber: '',
          IdentificationMark: '',
          profession: '',
          mobileNo: '',
          description: ''
        }}
        validationSchema={Yup.object({
          arrayaddresh: Yup.array().of(
            Yup.object({
              address: Yup.string().required('Address is required')
            })
          ),
          idType: Yup.string().required('ID type  is required'),
          idNumber: Yup.string().required('ID number is required'),
          name: Yup.string().required('Fullname is required'),
          date: Yup.date().required('Date of Birth is required'),
          height: Yup.number().required('Height is required'),
          alias: Yup.string().required('Alias is required'),
          gender: Yup.string().required('Gender is required'),
          eyecolor: Yup.string().required('Eye color is required'),
          IdentificationMark: Yup.string().required('Identification Mark is required'),
          profession: Yup.string().required('Profession is required'),
          mobileNo: Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
            .required('Mobile No. is required')
        })}
        innerRef={formikRef}
        onSubmit={values => {
          fetch('/registerPOI/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              dob: values.date
            },
            body: JSON.stringify(values)
          })
            .then(response => response.json())
            .then(data => console.log(data))

          // setOpen(false) // Close the dialog after form submission
          formikRef.current.resetForm()
        }}
      >
        {({ isSubmitting, values, touched, errors, handleChange, setFieldValue }) => (
          <Form>
            <DialogContent dividers>
              <Grid container spacing={4} sx={{ height: '77vh' }} alignItems='center'>
                <Grid item xs={6}>
                  <TextField
                    name='name'
                    label='Fullname'
                    size='small'
                    fullWidth
                    value={values.name}
                    onChange={handleChange}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Autocomplete
                    name='gender'
                    id='gender'
                    options={genderdata}
                    value={values.gender}
                    onChange={(event, newValue) => {
                      newValue ? setFieldValue('gender', newValue) : setFieldValue('gender', '')
                    }}
                    renderInput={params => (
                      <TextField
                        {...params}
                        label='Gender'
                        variant='outlined'
                        size='small'
                        error={touched.gender && Boolean(errors.gender)}
                        helperText={touched.gender && errors.gender}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name='date'
                    size='small'
                    type='date'
                    label='DOB'
                    fullWidth
                    value={values.date}
                    onChange={handleChange}
                    error={touched.date && Boolean(errors.date)}
                    helperText={touched.date && errors.date}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='alias'
                    label='Alias'
                    size='small'
                    fullWidth
                    value={values.alias}
                    onChange={e => {
                      const input = e.target.value.trim()
                      setFieldValue('alias', input)
                      handleChange(e)
                      debouncedAddChip(input)
                    }}
                    error={touched.alias && Boolean(errors.alias)}
                    helperText={touched.alias && errors.alias}
                    InputProps={{
                      startAdornment: (
                        <>
                          {chipData.map((chip, index) => (
                            <Chip
                              key={index}
                              label={chip.label}
                              onDelete={() => {
                                setChipData(prevChips => prevChips.filter((_, i) => i !== index))
                              }}
                              style={{ marginRight: '4px' }}
                            />
                          ))}
                        </>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name='height'
                    type='number'
                    size='small'
                    label='Height'
                    fullWidth
                    value={values.height}
                    onChange={handleChange}
                    error={touched.height && Boolean(errors.height)}
                    helperText={touched.height && errors.height}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name='eyecolor'
                    size='small'
                    label='Eye color'
                    fullWidth
                    value={values.eyecolor}
                    onChange={handleChange}
                    error={touched.eyecolor && Boolean(errors.eyecolor)}
                    helperText={touched.eyecolor && errors.eyecolor}
                  />
                </Grid>
                <Grid item xs={3} alignItems='center'>
                  <Autocomplete
                    name='idType'
                    id='idType'
                    options={idtypeData}
                    value={values.idType}
                    onChange={(event, newValue) => {
                      newValue ? setFieldValue('idType', newValue) : setFieldValue('idType', '')
                    }}
                    renderInput={params => (
                      <TextField
                        {...params}
                        label='ID type'
                        variant='outlined'
                        size='small'
                        error={touched.idType && Boolean(errors.idType)}
                        helperText={touched.idType && errors.idType}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    name='idNumber'
                    label='Enter ID no.'
                    size='small'
                    fullWidth
                    value={values.idNumber}
                    onChange={handleChange}
                    error={touched.idNumber && Boolean(errors.idNumber)}
                    helperText={touched.idNumber && errors.idNumber}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='IdentificationMark'
                    label='Identification Mark'
                    size='small'
                    fullWidth
                    value={values.IdentificationMark}
                    onChange={handleChange}
                    error={touched.IdentificationMark && Boolean(errors.IdentificationMark)}
                    helperText={touched.IdentificationMark && errors.IdentificationMark}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name='profession'
                    label='Profession'
                    size='small'
                    fullWidth
                    value={values.profession}
                    onChange={handleChange}
                    error={touched.profession && Boolean(errors.profession)}
                    helperText={touched.profession && errors.profession}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    name='mobileNo'
                    label='Mobile No.'
                    size='small'
                    value={values.mobileNo}
                    onChange={handleChange}
                    error={touched.mobileNo && Boolean(errors.mobileNo)}
                    helperText={touched.mobileNo && errors.mobileNo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FieldArray name='arrayaddresh'>
                    {({ remove, push }) => (
                      <>
                        <Grid container spacing={6} alignItems='center'>
                          {values.arrayaddresh.map((address, index) => (
                            <>
                              <Grid item xs={10}>
                                <TextField
                                  name={`arrayaddresh.${index}.address`}
                                  label='Address'
                                  id='address'
                                  size='small'
                                  fullWidth
                                  onChange={handleChange}
                                  value={values.arrayaddresh[index].address}
                                  error={
                                    touched.arrayaddresh &&
                                    touched.arrayaddresh[index] &&
                                    touched.arrayaddresh[index].address &&
                                    Boolean(
                                      errors.arrayaddresh &&
                                        errors.arrayaddresh[index] &&
                                        errors.arrayaddresh[index].address
                                    )
                                  }
                                  helperText={
                                    touched.arrayaddresh &&
                                    touched.arrayaddresh[index] &&
                                    touched.arrayaddresh[index].address &&
                                    errors.arrayaddresh &&
                                    errors.arrayaddresh[index] &&
                                    errors.arrayaddresh[index].address
                                  }
                                />
                              </Grid>
                              <Grid item xs={2}>
                                <div
                                  style={{
                                    display: 'flex',
                                    gap: '1rem'
                                  }}
                                >
                                  <div>
                                    <Tooltip title='ADD NOTE' placement='top'>
                                      <span>
                                        <IconButton
                                          onClick={() => push(empty)}
                                          style={{
                                            marginTop: '2 px',
                                            width: '1.5rem',
                                            height: ' 1.5rem',
                                            backgroundColor: '#7367F0'
                                          }}
                                        >
                                          <AddIcon
                                            style={{
                                              fontSize: '19',
                                              color: '#fff'
                                            }}
                                          />
                                        </IconButton>
                                      </span>
                                    </Tooltip>
                                  </div>
                                  <div>
                                    {index > 0 && (
                                      <Tooltip title='DELETE NOTE' placement='top'>
                                        <span>
                                          <IconButton
                                            onClick={() => remove(index)}
                                            style={{
                                              marginTop: '1px',
                                              width: '1.5rem',
                                              height: ' 1.5rem',
                                              backgroundColor: '#EA5455',
                                              marginLeft: '13px'
                                            }}
                                          >
                                            <DeleteIcon
                                              size='small'
                                              style={{
                                                fontSize: '18px',
                                                color: '#fff'
                                              }}
                                            />
                                          </IconButton>
                                        </span>
                                      </Tooltip>
                                    )}
                                  </div>
                                </div>
                              </Grid>
                            </>
                          ))}
                        </Grid>
                      </>
                    )}
                  </FieldArray>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name='description'
                    label='Description'
                    size='small'
                    multiline
                    minRows={3}
                    fullWidth
                    value={values.description}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Button component='label' variant='outlined' startIcon={<CloudUpload />}>
                    Upload Images
                    <input
                      name='uploadimg'
                      style={{ display: 'none' }}
                      type='file'
                      accept='image/*'
                      onChange={fileChange}
                    />
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
              <Button type='submit' variant='contained' endIcon={<Done />}>
                REPORT
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  )
}

export default RegisterPoIForm
