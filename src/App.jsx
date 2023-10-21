import Header from "./component/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./component/Footer"
import Book from "./component/Book"
import Cart from "./component/cart"
import Authors from "./component/Authors"
import { useState } from "react"



const App = () => {

  return (
    <>
      <BrowserRouter>

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/authors" element={<Authors />} />

          </Routes>
          <Footer />

      </BrowserRouter>

    </>
  )
}

export default App