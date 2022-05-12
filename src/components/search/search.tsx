// Modules
import Input from '@mui/material/Input'

// CSS
import './search.css'

const ariaLabel = { 'aria-label': 'Search Products' }

const Search = () => {
  return <Input defaultValue="Search" inputProps={ariaLabel} />
}

export default Search
