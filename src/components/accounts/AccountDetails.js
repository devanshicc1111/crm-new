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

const AccountDetails = ({ open, handleClose, handleDialogSubmit }) => {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        sx={{
          padding: '0.5rem'
        }}
      >
        <DialogTitle sx={{ p: 2, paddingLeft: '0.9rem', fontSize: '1.5rem' }} id='customized-dialog-title'>
          CREATE
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          aria-label='close'
          sx={{
            position: 'absolute',
            right: 8,
            top: 7,
            color: theme => theme.palette.grey[500]
          }}
        >
          <GridCloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid
            container
            spacing={2}
            sx={{
              padding: '0.3rem'
            }}
          >
            <Grid item xs={6}>
              <InputLabel shrink htmlFor='bootstrap-input' sx={{ transformOrigin: 'center', display: 'initial ' }}>
                Contact Name
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='SecondAddress' fullWidth />
            </Grid>
            <Grid item xs={6}>
              <InputLabel shrink htmlFor='bootstrap-input' sx={{ transformOrigin: 'center', display: 'initial ' }}>
                Account Name
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='SecondAddress' fullWidth />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
              <InputLabel shrink htmlFor='bootstrap-input' sx={{ transformOrigin: 'center', display: 'initial ' }}>
                Country
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='Country' fullWidth />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
              <InputLabel shrink htmlFor='bootstrap-input' sx={{ transformOrigin: 'center', display: 'initial ' }}>
                City
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='Country' fullWidth />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
              <InputLabel shrink htmlFor='bootstrap-input' sx={{ transformOrigin: 'center', display: 'initial ' }}>
                First Name
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='Country' fullWidth />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
              <InputLabel shrink htmlFor='bootstrap-input' sx={{ transformOrigin: 'center', display: 'initial ' }}>
                Second Address
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='SecondAddress' fullWidth />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
              <InputLabel shrink htmlFor='bootstrap-input' sx={{ transformOrigin: 'center', display: 'initial ' }}>
                Phone
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='Country' fullWidth />
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '0.3rem' }}>
              <InputLabel shrink htmlFor='bootstrap-input' sx={{ transformOrigin: 'center', display: 'initial ' }}>
                Email
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='Country' fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '0.3rem' }}>
              <InputLabel
                shrink
                htmlFor='bootstrap-input'
                sx={{ transformOrigin: 'left', display: 'initial ', display: 'initial ' }}
              >
                Description
              </InputLabel>
              <TextField id='outlined-basic' variant='outlined' size='small' name='Country' fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '0.3rem', padding: 0, textAlign: 'right' }}>
              <Button variant='contained' onClick={handleDialogSubmit} type='Submit'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AccountDetails
