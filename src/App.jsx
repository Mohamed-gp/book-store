import Header from "./component/Header"
import { BrowserRouter ,Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./component/Footer"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>

      </BrowserRouter>
      
    </>
  )
}

export default App