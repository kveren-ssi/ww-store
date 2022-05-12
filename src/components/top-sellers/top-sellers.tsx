// Modules
import Grid from '@mui/material/Grid'
import TopSellersItem from '../top-sellers-item'

// CSS
import './top-sellers.css'

const TopSellersItems = ['Top seller', 'Top seller', 'Top seller', 'Top seller']

const TopSellers = () => {
  return (
    <section className="wws-top-sellers wws-section">
      <Grid container spacing={2}>
        {TopSellersItems.map((item, id) => (
          <TopSellersItem key={id} id={++id} name={item} />
        ))}
      </Grid>
    </section>
  )
}

export default TopSellers
