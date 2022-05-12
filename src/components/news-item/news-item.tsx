// Modules
import Grid from '@mui/material/Grid'

// CSS
import './news-item.css'

type NewsItemProps = {
  id: number
  name: string
}

const NewsItem = ({ id, name }: NewsItemProps) => {
  return (
    <Grid container spacing={2} className="wws-news-item">
      <Grid item xs={4}>
        <div className="wws-item">Image</div>
      </Grid>
      <Grid item xs={8}>
        <div className="wws-item">
          <h3>{`${name} ${id}`}</h3>
          <h6>5 month 2022</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            convallis feugiat lacus sit amet pulvinar. Nam nulla dui, suscipit a
            augue vel, aliquam condimentum velit.
          </p>
        </div>
      </Grid>
    </Grid>
  )
}

export default NewsItem
