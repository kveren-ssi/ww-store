// Modules
import Grid from '@mui/material/Grid'
import BrandItem from '../brand-item'

// CSS
import './brands.css'

const BrandsNames = [
  'Brand Name',
  'Brand Name',
  'Brand Name',
  'Brand Name',
  'Brand Name',
  'Brand Name',
]

const Brands = () => {
  return (
    <section className="wws-brands wws-section">
      <Grid container spacing={2}>
        {BrandsNames.map((name, id) => {
          return (
            <Grid item xs={2} key={id}>
              <BrandItem id={++id} name={name}></BrandItem>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default Brands
