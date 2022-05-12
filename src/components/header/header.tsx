// Modules
import Grid from '@mui/material/Grid'
import Search from '../search'
import Button from '@mui/material/Button'
import Menu from '../menu'

// CSS
import './header.css'

const Header = () => {
  return (
    <header>
      <Grid container>
        <Grid item xs={12}>
          <div className="wws-header-top">
            <div className="wws-search">
              <Search />
            </div>
            <div className="wws-site-name">
              <h1>Wanderlust Wear</h1>
            </div>
            <div className="wws-cart-button">
              <Button variant="outlined">Cart</Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="wws-menu">
          <Menu />
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
