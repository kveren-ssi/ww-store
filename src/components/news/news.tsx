// Modules
import Grid from '@mui/material/Grid'
import NewsItem from '../news-item'

// CSS
import './news.css'

const newsNames = [
  'Blog Post Name',
  'Blog Post Name',
  'Blog Post Name',
  'Blog Post Name',
]

const News = () => {
  return (
    <section className="wws-news wws-section">
      <Grid container spacing={2}>
        {newsNames.map((name, id) => {
          return (
            <Grid item xs={6} key={id}>
              <NewsItem id={++id} name={name}></NewsItem>
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default News
