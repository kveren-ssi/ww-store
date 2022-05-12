// CSS
import './footer-item.css'

type FooterItemProps = {
  name: string
}

const FooterItem = ({ name }: FooterItemProps) => {
  return <div className="wws-item">{name}</div>
}

export default FooterItem
