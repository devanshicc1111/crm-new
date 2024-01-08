import { forwardRef, Fragment, useState } from 'react'
import {
  AppBar,
  Button,
  CardHeader,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  TextField
} from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import LayoutAppBar from 'src/@core/layouts/components/vertical/appBar'
import Card from '@mui/material/Card'
// import LeadStatus from '../details/LeadStatus'
// import CardHeader from '@mui/material/CardHeader'
import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import Icon from 'src/@core/components/icon'
// import LeadProductTable from '../details/LeadProductTable'
// import LeadMileStoneTable from '../details/LeadMileStoneTable'
// import QuotationList from '../details/QuotationList'
// import LeadTimeline from '../details/LeadTimeline'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from 'react-datepicker'
import CustomTextField from 'src/@core/components/mui/text-field'
import DealStatus from './DealStatus'

// import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const CustomInput = forwardRef(({ ...props }, ref) => {
  return <CustomTextField fullWidth label='Start Date' inputRef={ref} {...props} />
})

const ViewDetails = ({ open, handleClose, poNumber }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [collapseQuotation, setCollapseQuotation] = useState(true)
  const [notesCollapse, setNotesCollapse] = useState(true)
  const [issueDate, setIssueDate] = useState(new Date())
  const dateFormate = new Date(issueDate).toLocaleDateString('en-IN')
  console.log('dateFormate', dateFormate)

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
          Po Number:{poNumber}
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
            <DealStatus />
          </Card>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default ViewDetails
