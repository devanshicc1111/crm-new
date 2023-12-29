import Grid from '@mui/material/Grid'
import ContactTable from 'src/views/pages/table/ContactTable'

const Contact = () => {
  return (
    <main>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ContactTable />
        </Grid>
      </Grid>
    </main>
  )
}

export default Contact
