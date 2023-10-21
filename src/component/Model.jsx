import { faCartPlus, faStar, faStarHalf, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { Link } from "react-router-dom"
import cartctx from "../context/cartcontext"
import { useState } from "react"
const Model = ({ openmodel, setopenmodel, bookdata, setbookdata }) => {
  const hideview = (e) => {
    if (!document.querySelector(".model").contains(e.target)) {
      setopenmodel(!openmodel)
    }
  }

  // cart 
  const {cartitems , addtocart , removefromcart} = useContext(cartctx)

  const [qty,setqty] = useState(0)

  return (
    <>
      <div className="model-container z-50 bg-[#00000061] fixed left-0 top-0 w-screen h-screen flex justify-center items-center" onClick={hideview}>
        <div className="w-10/12 h-5/6 gap-4 justify-center bg-white rounded-lg model relative container px-4 flex items-center">
          <div className="img w-48">
            <img src={`/assets/books/${bookdata.image}`} alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="title font-bold text-3xl">{bookdata.title}</p>
            <p><span className="font-bold text-xl">Status:</span> {bookdata.inStock ? <>In Stock</> : <>Not In Stock</>}</p>
            <div className="flex items-center font-bold">
              {bookdata.rating >= 1 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : bookdata.rating >= .5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
              {bookdata.rating >= 2 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : bookdata.rating >= 1.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
              {bookdata.rating >= 3 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : bookdata.rating >= 2.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
              {bookdata.rating >= 4 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : bookdata.rating >= 3.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
              {bookdata.rating >= 5 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : bookdata.rating >= 4.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
              <p className="ml-1 text-yellow-400">{bookdata.rating}</p>
              <span className="text-gray-500 ml-2">({bookdata.reviews})</span>
            </div>
            <p className="text-mb font-bold"><span className="font-bold text-xl text-black">Author:</span> {bookdata.author}</p>
            <p className="text-red-500 font-bold"><span className="font-bold text-xl text-black">Price:</span> ${bookdata.price}</p>
            <div className="flex items-center gap-2 flex-col md:flex-row">
              <input type="number" name="" min={1} value={qty} onChange={(e) => {setqty(e.currentTarget.value)}} id="" className="border-2 border-black py-2 pl-2 focus:outline-none" />
              <button onClick={() => {addtocart({...bookdata,quantity: qty})}} className="flex bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer items-center gap-2 ">
                <FontAwesomeIcon icon={faCartPlus} />
                <p>Add To Cart</p>
              </button>
            </div>
            <Link to={`book/${bookdata.id}`} className="px-6 py-2 rounded-xl bg-mb text-white my-3 w-fit mx-auto md:mx-0">
            See More Details
          </Link>
        </div>

        <div onClick={() => setopenmodel(!openmodel)} className="w-10 text-xl h-10 -right-5 -top-5 cursor-pointer absolute text-white bg-red-500 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faX} />
        </div>
      </div>
    </div >
    </>
  )
}

export default Model