import Grid from '@mui/material/Grid'
import DealsTable from 'src/views/pages/table/DealsTable'

const Deals = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <DealsTable />
        </Grid>
      </Grid>
    </div>
  )
}

export default Deals
