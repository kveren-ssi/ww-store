// Modules
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

// CSS
import './menu.css'

const pages = ['Homepage', 'Shop', 'Blog', 'Contacts']

const Menu = () => {
  return (
    <ButtonGroup variant="text" aria-label="text button group">
      {pages.map((page) => (
        <Button key={page}>{page}</Button>
      ))}
    </ButtonGroup>
  )
}

export default Menu
