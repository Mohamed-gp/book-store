import Footer from "../component/Footer"
import Books from "../component/Books"
import Header from "../component/Header"
import Services from "../component/Services"
import Slider from "../component/Slider"
import { books } from "../data/books"
const ratingsortedbooks = [...books].sort((a, b) => b.rating - a.rating)
const reviewsortedbooks = [...books].sort((a, b) => b.reviews - a.reviews)
const pricesortedbooks = [...books].sort((a, b) => a.price - b.price)

const Home = () => {
  return (
    <>
      <Slider />
      <Services />
      <Books books={ratingsortedbooks} title={"Most gifted"} number={0} />
      <Books books={reviewsortedbooks} title={"Best Seller"} number={1} />
      <Books books={pricesortedbooks} title={"Best Price"} number={2} />
      
    </>

  )
}

export default Home


