// Modules
import Showcase from '../showcase'
import TopSellers from '../top-sellers'
import AdvBlock from '../adv-block'
import News from '../news'
import Brands from '../brands'

// CSS
import './main.css'

const Main = () => {
  return (
    <main className="wws-section">
      <Showcase />
      <TopSellers />
      <AdvBlock />
      <News />
      <Brands />
    </main>
  )
}

export default Main
