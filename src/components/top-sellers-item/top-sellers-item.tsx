// Modules
import Grid from '@mui/material/Grid'

// CSS
import './top-sellers-item.css'

type TopSellersItemProps = {
  id: number
  name: string
}

const TopSellersItem = (props: TopSellersItemProps) => {
  return (
    <Grid item xs={3}>
      <div className="wws-item">{`${props.name} ${props.id}`}</div>
    </Grid>
  )
}

export default TopSellersItem
