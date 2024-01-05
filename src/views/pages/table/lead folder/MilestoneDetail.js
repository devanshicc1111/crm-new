import React, { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip, IconButton, Grid, Button, DialogActions } from '@mui/material'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'
import { Formik, Form, FieldArray, Field } from 'formik'
import * as Yup from 'yup'

import DeleteIcon from '@mui/icons-material/Delete'

function MilestoneDetail({ onBack }) {
  const validationSchema = Yup.object({
    milestones: Yup.array().of(
      Yup.object().shape({
        product: Yup.string().required('Product is required'),
        unit: Yup.number().required('Unit is required').positive('Unit must be a positive number'),
        totalCost: Yup.string().required('Total Cost is required'),
        descriptionValue: Yup.string().required('Description Value is required')
      })
    )
  })
  const [onClose, setOnClose] = useState()
  return (
    <Formik
      initialValues={{ milestones: [{ product: '', unit: '', totalCost: '', descriptionValue: '' }] }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {({ values }) => (
        <Form>
          <DialogContent dividers>
            <FieldArray name='milestones'>
              {({ push, remove }) => (
                <>
                  {values.milestones.map((milestone, index) => (
                    <Grid container spacing={2} key={index} sx={{ marginTop: '0.5rem' }}>
                      <Grid item xs={3}>
                        <Field
                          as={TextField}
                          size='small'
                          label='Product'
                          type='text'
                          name={`milestones[${index}].product`}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Field
                          as={TextField}
                          size='small'
                          label='Unit'
                          type='number'
                          name={`milestones[${index}].unit`}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Field
                          as={TextField}
                          size='small'
                          label='Total Cost'
                          type='text'
                          name={`milestones[${index}].totalCost`}
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <Field
                          as={TextField}
                          size='small'
                          label='Description Value'
                          type='text'
                          name={`milestones[${index}].descriptionValue`}
                        />
                      </Grid>

                      <Grid item xs={1}>
                        <Tooltip title='ADD NOTE' placement='top'>
                          <IconButton
                            style={{
                              width: '2.2rem',
                              height: ' 2.4rem',
                              backgroundColor: 'rgb(0, 150, 136)'
                            }}
                            onClick={() => push({ product: '', unit: '', totalCost: '', descriptionValue: '' })}
                          >
                            <AddIcon style={{ fontSize: '20', color: '#fff' }} />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item xs={1}>
                        {index > 0 && (
                          <Tooltip title='REMOVE NOTE' placement='top'>
                            <IconButton
                              style={{
                                width: '2.2rem',
                                height: ' 2.4rem',
                                backgroundColor: 'rgb(230, 81, 71)'
                              }}
                              onClick={() => remove(index)}
                            >
                              <DeleteIcon style={{ fontSize: '20', color: '#fff' }} />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Grid>
                    </Grid>
                  ))}
                </>
              )}
            </FieldArray>
          </DialogContent>

          <DialogActions sx={{ padding: 0, marginTop: '1rem' }}>
            <Button
              type='back'
              variant='contained'
              color='primary'
              disableElevation
              sx={{ marginRight: '16rem' }}
              onClick={onBack}
            >
              Back
            </Button>
            <Button endIcon={<CloseIcon />} type='reset' variant='contained' color='primary' disableElevation>
              RESET
            </Button>
            <Button endIcon={<DoneIcon />} type='submit' variant='contained' color='primary' disableElevation>
              SUBMIT
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  )
}

export default MilestoneDetail
