// CSS
import './brand-item.css'

type BrandItemProps = {
  id: number
  name: string
}

const BrandItem = ({ id, name }: BrandItemProps) => {
  return <div className="wws-item">{`${name} ${id}`}</div>
}

export default BrandItem
