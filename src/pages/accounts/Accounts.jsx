// ** MUI Imports
import Grid from '@mui/material/Grid'
import AccountTable from 'src/views/pages/table/AccountTable'

const Accounts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AccountTable />
      </Grid>
    </Grid>
  )
}

export default Accounts
