import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCartPlus, faEye, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import Model from "./Model";
import cartctx from "../context/cartcontext";



const Books = ({ books, title, number }) => {

  const [indexslide, setindexslide] = useState(0)
  const sliding = (direction) => {
    if (direction == "toLeft") {
      setindexslide(indexslide - 1)
    }

    else {
      setindexslide(indexslide + 1)

    }
  }
  //modal
  const [openmodel, setopenmodel] = useState(false)
  const [bookdata, setbookdata] = useState(null)
  const viewmodel = (data) => {
    setopenmodel(!openmodel)
    setbookdata(data)
  }

  const {cartitems , addtocart , removefromcart} = useContext(cartctx)
  return (
    <>
      <div className="container" >
        <p className="title my-4 text-mb font-bold text-xl border-b-4  border-b-mb w-fit pr-4 lg:text-3xl">
          {title}
        </p>
      </div>
      <div className="container relative">
        <div
          className="gifted-books-conatainer slider container  flex gap-8"
          style={{ width: `${books.length * 340}px` }}
        >
          {books.map((e) => {
            return (
              <div
                className="flex items-center flex-col gap-1 border-2 bg-snow py-4 px-8 rounded-lg duration-1000"
                style={{ width: "340px", transform: `translateX(${-(indexslide * 328)}px)` }}
                key={e.id}
              >
                <div className="img w-48 overflow-hidden" style={{ height: "300px" }}>
                  <img src={`/assets/books/${e.image}`} alt={e.id} />
                </div>
                <p className="font-bold h-10 text-sm  flex items-center">{e.title}</p>
                <div className="flex gap-2 ">
                  <div className="stars">
                    <div className="flex items-center">
                      {e.rating >= 1 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : e.rating >= 0.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <></>}
                      {e.rating >= 2 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : e.rating >= 1.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <></>}
                      {e.rating >= 3 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : e.rating >= 2.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <></>}
                      {e.rating >= 4 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : e.rating >= 3.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <></>}
                      {e.rating >= 5 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : e.rating >= 4.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <></>}
                      <p className="text-yellow-400 font-bold ml-2">{e.rating}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 font-bold">({e.reviews})</p>
                </div>
                <p className="text-red-500 font-bold text-lg">${e.price}</p>
                <div className="view-and-cart flex gap-2 items-center text-gray-500 font-bold text-xl my-2">
                  <FontAwesomeIcon icon={faEye} className="cursor-pointer" onClick={() => viewmodel(e)} />
                  <FontAwesomeIcon icon={faCartPlus} className="cursor-pointer"  onClick={() => {addtocart({...e,quantity: 1})}}/>
                </div>
              </div>
            );
          })}
          {indexslide >= 1 ? <FontAwesomeIcon onClick={() => { sliding("toLeft") }} icon={faArrowLeft} className="text-white left-arrow-books bg-red-400 text-3xl absolute left-10 w-12 md:-left-6 h-12 rounded-full p-1 cursor-pointer top-1/2 -translate-y-1/2" /> : <></>}
          {indexslide < books.length - 3 ? <FontAwesomeIcon onClick={() => { sliding("toRight") }} icon={faArrowRight} className="text-white right-arrow-books bg-red-400 text-3xl absolute w-12 right-10 md:-right-6 h-12 rounded-full p-1 cursor-pointer top-1/2 -translate-y-1/2" /> : <></>}
        </div>
        {openmodel ? <Model openmodel={openmodel} setopenmodel={setopenmodel} bookdata={bookdata} setbookdata={setbookdata} /> : null}
      </div>

    </>
  );
};

export default Books;
