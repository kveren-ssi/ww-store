// CSS
import './showcase-item.css'

type ShowcaseItemProps = {
  id: number
  product: string
}

const ShowcaseItem = (props: ShowcaseItemProps) => {
  return (
    <div
      className={`product-${props.id} wws-item`}
    >{`${props.product} - ${props.id}`}</div>
  )
}

export default ShowcaseItem
