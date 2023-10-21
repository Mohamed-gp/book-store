import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { books } from "../data/books"
import { faStar, faStarHalf, faCartPlus, faFile, faGlobe, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom"
import { useContext, useState } from "react"
import cartctx from "../context/cartcontext"


const Book = () => {
  const {id} = useParams()
  const book = books.find((b) => b.id == id);
  const {cartitems , addtocart , removefromcart} = useContext(cartctx)
  const [qty,setqty] = useState(0)

  return (
    <>
    
      <div className="container my-5 flex gap-10 flex-wrap px-4">
        <div className="bg-white p-10">
          <img src={`/assets/books/${book.image}`} alt={book.id} />
        </div>
        <div className="flex flex-col">
          <p className="font-bold  mb-4 text-2xl">{book.title}</p>
          <p className="text-gray-500 text-xl">by <span className="font-bold text-mb">{book.author}</span> (Author)</p>
          <div className="rating flex my-5 text-gray-500 font-bold items-center">
            {book.rating >= 1 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : book.rating >= .5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
            {book.rating >= 2 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : book.rating >= 1.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
            {book.rating >= 3 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : book.rating >= 2.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
            {book.rating >= 4 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : book.rating >= 3.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
            {book.rating >= 5 ? <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> : book.rating >= 4.5 ? <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400" /> : <FontAwesomeIcon icon={faStar} />}
            <span className="text-yellow-400 ml-1 mr-2">{book.rating}</span>
            ({book.reviews})
          </div>
          <div className="flex items-center gap-2 flex-col md:flex-row">
            <input type="number" name="" min={1}  className="border-2 border-black py-2 pl-2 focus:outline-none" value={qty} onChange={(e) => {setqty(e.currentTarget.value)}}/>
            <button className="flex bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer items-center gap-2 " onClick={() => {addtocart({...book,quantity: qty})}}>
              <FontAwesomeIcon icon={faCartPlus} />
              <p>Add To Cart</p>
            </button>
          </div>
        </div>
        <p className="w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, sed. Autem, sunt repudiandae nihil at dicta, accusamus vel nulla aliqubook quos veritatis soluta natus. Voluptatem cum exercitationem dolorum sunt odio?
          Eligendi ad autem optio repellendus consectetur nihil iure eos iste laudantium sunt, error earum rerum nesciunt? Nostrum molestias aliquam unde quaerat vero labore inventore dolores temporibus. Ipsum dicta ad distinctio?
          Repudiandae libero, sequi beatae, amet laborum qubookem ipsam tempore ducimus aliquam in tenetur distinctio voluptates adipisci qui dicta eligendi. Excepturi fugiat nihil autem, sed debitis cum repellendus dolore animi earum!
          Magnam nulla quod non vitae repellat eum. Voluptas velit consequatur accusantium dolorum. Magnam eaque minima deleniti ex eos dolorem ea incbookunt quam officia beatae, autem unde obcaecati eum vero eveniet!
          Voluptatem porro saepe sequi praesentium! Placeat ut ex dolorem, magnam aliquam adipisci commodi blanditiis aut. Dignissimos, voluptatem ipsam ipsa aspernatur libero suscipit autem nostrum itaque delectus officiis incbookunt. Corporis, est!</p>
          <div className="flex flex-col items-center justify-center font-bold text-mb gap-2 text-2xl">
            <p>Print Length</p>
            <FontAwesomeIcon icon={faFile} />
            <p>{book.printLength} pages</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold text-mb gap-2 text-2xl">
            <p>Language</p>
            <FontAwesomeIcon icon={faGlobe} />
            <p>{book.language}</p>
          </div>
          <div className="flex flex-col items-center justify-center font-bold text-mb gap-2 text-2xl">
            <p>Publication date</p>
            <FontAwesomeIcon icon={faCalendar} />
            <p>{book.PublicationDate}</p>
          </div>
      </div>
    </>
  )
}

export default Book