import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import LeadForm from './LeadForm'
import MilestoneDetail from './MilestoneDetail'
import { Dialog, Grid } from '@mui/material'

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set())

  const isStepSkipped = step => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const steps = ['CREATE LEAD', 'SELECT PRODUCT']

  return (
    <Box sx={{ width: '100%', padding: '0.7rem' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {}
          const labelProps = {}

          if (isStepSkipped(index)) {
            stepProps.completed = false
          }

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <Grid>
        {activeStep === steps.length ? null : (
          <React.Fragment>
            <Box sx={{ flex: '1 1 auto', height: '17px' }} />

            {activeStep === 0 && <LeadForm handleNext={handleNext} />}

            {activeStep === 1 && <MilestoneDetail handleNext={handleNext} onBack={handleBack} />}
          </React.Fragment>
        )}
      </Grid>
    </Box>
  )
}
