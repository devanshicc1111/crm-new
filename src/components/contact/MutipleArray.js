import React, { useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DoneIcon from '@mui/icons-material/Done'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip, IconButton, Grid, Button, Paper } from '@mui/material'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import { Formik, Form, FieldArray, Field } from 'formik'
import * as Yup from 'yup'
import AddIcon from '@mui/icons-material/Add'

function MultipleArray() {
  const validationSchema = Yup.object({
    milestones: Yup.array().of(
      Yup.object().shape({
        addNote: Yup.string()
      })
    )
  })
  const fileChange = (e, formik, index) => {
    let file = e.target.files[0]
    formik.setFieldValue(`contact[${index}].files`, file)
    formik.setFieldValue(`contact[${index}].files`, file)

    const updatedFileNames = [...fileName]
    updatedFileNames[index] = file ? file.name : ''
    SetFileName(updatedFileNames)
  }
  return (
    <Formik
      initialValues={{ milestones: [{ milestones: '' }] }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <Paper>
            <Grid container spacing={2}>
              <FieldArray name='milestones'>
                {({ push, remove }) => (
                  <>
                    {values.milestones.map((milestone, index) => (
                      <>
                        <Grid item xs={6} sx={{ marginTop: '10px' }}>
                          <Field
                            as={TextField}
                            size='medium'
                            label='ADD NOTE'
                            type='text'
                            fullWidth
                            name={`milestones[${index}].addNote`}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <IconButton
                            style={{
                              marginLeft: '8rem',
                              height: '1rem',
                              width: '1rem',
                              marginTop: '13px'
                            }}
                          >
                            <label>
                              <input
                                id={`fileInput-${index}`}
                                type='file'
                                onChange={e => fileChange(e, formik, index)}
                                style={{ marginTop: '20px' }}
                              />
                            </label>
                          </IconButton>
                        </Grid>

                        <Grid item xs={1}>
                          {index > 0 && (
                            <Tooltip title='REMOVE NOTE' placement='top'>
                              <IconButton
                                style={{
                                  width: '2.2rem',
                                  height: ' 2.4rem',
                                  backgroundColor: 'rgb(230, 81, 71)',
                                  marginTop: '13px'
                                }}
                                onClick={() => remove(index)}
                              >
                                <DeleteIcon style={{ fontSize: '20', color: '#fff' }} />
                              </IconButton>
                            </Tooltip>
                          )}
                        </Grid>
                      </>
                    ))}
                    <Tooltip title='ADD NOTE' placement='top'>
                      <IconButton
                        style={{
                          width: '2.2rem',
                          height: ' 2.4rem',
                          backgroundColor: 'rgb(0, 150, 136)',
                          float: 'right',
                          marginTop: '20px'
                        }}
                        onClick={() =>
                          push({
                            addNote: ''
                          })
                        }
                      >
                        <AddIcon style={{ fontSize: '20   ', color: '#fff' }} />
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              </FieldArray>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  )
}

export default MultipleArray
