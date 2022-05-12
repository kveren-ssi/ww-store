// Modules
import Grid from '@mui/material/Grid'
import FooterItem from '../footer-item'

// CSS
import './footer.css'

const FooterItemNames = ['About Us', 'News Letter', 'Information', 'Item Tags']

const Footer = () => {
  return (
    <footer>
      <Grid container spacing={2}>
        {FooterItemNames.map((name, id) => {
          return (
            <Grid item xs={3} key={id}>
              <FooterItem name={name}></FooterItem>
            </Grid>
          )
        })}
      </Grid>
    </footer>
  )
}

export default Footer
