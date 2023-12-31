import Grid from '@mui/material/Grid'
import ProductTable from 'src/views/pages/table/ProductTable'

const Products = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ProductTable />
        </Grid>
      </Grid>
    </div>
  )
}

export default Products
