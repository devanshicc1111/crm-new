import { forwardRef, Fragment, useState } from 'react'
import { AppBar, Button, Dialog, DialogActions, DialogTitle, Grid, IconButton, TextField } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import LayoutAppBar from 'src/@core/layouts/components/vertical/appBar'
import Card from '@mui/material/Card'
import LeadStatus from '../details/LeadStatus'
import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'
import LeadProductTable from '../details/LeadProductTable'
import LeadMileStoneTable from '../details/LeadMileStoneTable'
import QuotationList from '../details/QuotationList'
import LeadTimeline from '../details/LeadTimeline'
import CustomTextField from 'src/@core/components/mui/text-field'
import DatePicker from 'react-datepicker'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const CustomInput = forwardRef(({ ...props }, ref) => {
  return <CustomTextField fullWidth label='Start Date' inputRef={ref} {...props} />
})

const LeadDetails = ({ open, handleClose, handleDialogSubmit, popperPlacement }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [collapseQuotation, setCollapseQuotation] = useState(true)
  const [notesCollapse, setNotesCollapse] = useState(true)
  const [date, setDate] = useState(new Date())

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open={open}
      TransitionComponent={Transition}
      fullWidth
      maxWidth='md'
    >
      <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
        <Typography variant='h6' component='span'>
          Lead Details
        </Typography>
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

      <Grid
        container
        spacing={3}
        sx={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 2,
          paddingBottom: 2
        }}
      >
        <Grid xs={12}>
          <Card sx={{ position: 'relative', marginTop: 3, marginLeft: 3, padding: 2 }}>
            <Grid className='lead-status-container' style={{ display: 'flex' }}>
              <Grid xs={2} className='lead-status-item'>
                <DatePicker
                  readOnly
                  selected={date}
                  id='read-only-input'
                  popperPlacement={popperPlacement}
                  onChange={date => setDate(date)}
                  placeholderText='Click to select a date'
                  customInput={<CustomInput readOnly label='Readonly' />}
                />
              </Grid>

              <Grid xs={8} className='lead-status-item' overflow>
                <LeadStatus />
              </Grid>

              <Grid xs={2} className='lead-status-item'>
                <DatePicker
                  selected={date}
                  id='basic-input'
                  popperPlacement={popperPlacement}
                  onChange={date => setDate(date)}
                  placeholderText='Click to select a date'
                  customInput={<CustomInput label='Basic' />}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid xs={12}>
          <Card sx={{ position: 'relative', marginTop: 3, marginLeft: 3, padding: 2 }}>
            <CardHeader
              title='Description'
              action={
                <IconButton
                  size='small'
                  aria-label='collapse'
                  sx={{ color: 'text.secondary' }}
                  onClick={() => setCollapsed(!collapsed)}
                >
                  <Icon fontSize={20} icon={!collapsed ? 'tabler:chevron-down' : 'tabler:chevron-up'} />
                </IconButton>
              }
            />
            <Collapse in={collapsed}>
              <CardContent>
                <TextField id='fullwidth' multiline maxRows={8} fullWidth />
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid xs={12}>
          <LeadProductTable />
        </Grid>
        <Grid xs={12}>
          <LeadMileStoneTable />
        </Grid>

        <Grid xs={6}>
          <Grid xs={12}>
            <Card
              sx={{
                position: 'relative',
                marginTop: 3,
                marginLeft: 3,
                padding: 2,
                maxHeight: '200px !important',
                overflow: 'auto'
              }}
            >
              <CardHeader
                title='Quotation'
                action={
                  <IconButton
                    size='small'
                    aria-label='collapse'
                    sx={{ color: 'text.secondary' }}
                    onClick={() => setCollapseQuotation(!collapseQuotation)}
                  >
                    <Icon fontSize={20} icon={!collapseQuotation ? 'tabler:chevron-down' : 'tabler:chevron-up'} />
                  </IconButton>
                }
              />
              <Collapse in={collapseQuotation}>
                <CardContent>
                  <QuotationList />
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid xs={12}>
            <Card sx={{ position: 'relative', marginTop: 3, marginLeft: 3, padding: 2, Height: '200px !important' }}>
              <CardHeader
                title='Notes'
                action={
                  <IconButton
                    size='small'
                    aria-label='collapse'
                    sx={{ color: 'text.secondary' }}
                    onClick={() => setNotesCollapse(!notesCollapse)}
                  >
                    <Icon fontSize={20} icon={!notesCollapse ? 'tabler:chevron-down' : 'tabler:chevron-up'} />
                  </IconButton>
                }
              />
              <Collapse in={notesCollapse}>
                <CardContent>
                  <TextField id='fullwidth' multiline maxRows={8} fullWidth />
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>

        <Grid xs={6}>
          <LeadTimeline />
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default LeadDetails
