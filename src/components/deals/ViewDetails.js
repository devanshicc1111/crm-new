import { forwardRef, Fragment, useState } from 'react'
import { AppBar, Button, Dialog, DialogActions, DialogTitle, Grid, IconButton, TextField } from '@mui/material'
import { GridCloseIcon } from '@mui/x-data-grid'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import LayoutAppBar from 'src/@core/layouts/components/vertical/appBar'
import Card from '@mui/material/Card'
import DealStatus from './DealStatus'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const ViewDetails = ({ open, handleClose, handleDialogSubmit }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [collapseQuotation, setCollapseQuotation] = useState(true)
  const [notesCollapse, setNotesCollapse] = useState(true)
  const [historyCollapse, setHistoryCollapse] = useState(true)
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
          Deal Details
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
