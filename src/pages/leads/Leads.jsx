import Grid from '@mui/material/Grid'
import LeadTable from 'src/views/pages/table/lead folder/LeadTable'
import TableSelection from 'src/views/pages/table/DealsTable'

const Leads = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <LeadTable />
        </Grid>
      </Grid>
    </div>
  )
}

export default Leads
