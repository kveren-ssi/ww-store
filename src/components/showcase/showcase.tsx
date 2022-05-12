// Modules
import ShowcaseItem from '../showcase-item'

// CSS
import './showcase.css'

const products = ['Product', 'Product', 'Product']

const Header = () => {
  return (
    <section className="wws-showcase wws-section">
      <div className="container">
        {products.map((product, id) => {
          return (
            <ShowcaseItem
              key={id}
              id={++id}
              product={product}
            ></ShowcaseItem>
          )
        })}
      </div>
    </section>
  )
}

export default Header
