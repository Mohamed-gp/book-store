import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { books } from "../data/books"
import { useContext } from "react"
import cartctx from "../context/cartcontext"


const Cart = () => {

    // items 
    const { cartitems, addtocart, removefromcart } = useContext(cartctx)
    const totalPrice = (cartitems.reduce((acc, curr) => acc + curr.price * +curr.quantity, 0)).toFixed()

    return (



        // 
        <>
            <div className="cart-content  border-t-2 border-t-black">
                <div className="container py-4 px-4">
                    <p className="text-3xl font-bold w-fit pr-2 border-b-4 pb-2 border-b-black ">Your Shopping Cart</p>
                    <div className="flex my-8 flex-wrap gap-10">
                        <div className="books-container-cart flex flex-col gap-3 lg:flex-1 lg:w-auto w-full">


                            {cartitems.map(item => {
                                return (
                                    <>
                                        <div className="flex gap-2 relative items-center flex-1" >
                                            <div className="img w-40">
                                                <img src={`/assets/books/${item.image}`} alt="book" />
                                            </div>
                                            <div className="flex justify-between flex-1">
                                                <div className="flex flex-col gap-2 font-bold">
                                                    <p>Title:  {item.title}</p>
                                                    <p>Author: {item.author}</p>
                                                </div>
                                                <div className=" flex flex-col items-center gap-2">
                                                    <div className="flex gap-2 items-center">
                                                        <button onClick={() => { addtocart(item, parseInt(item.quantity) - 1) }} className={`- w-9 h-9 cursor-pointer text-white bg-mb flex justify-center items-center rounded-xl ${item.quantity <= 0 ? `opacity-50` : ``} `}><FontAwesomeIcon icon={faMinus} /></button>
                                                        <p>{item.quantity}</p>
                                                        <button onClick={() => { addtocart(item, parseInt(item.quantity) + 1) }} className="+ w-9 h-9 cursor-pointer text-white bg-mb flex justify-center items-center rounded-xl"><FontAwesomeIcon icon={faPlus} /></button>
                                                    </div>
                                                    <p>${item.price * item.quantity}</p>
                                                </div>
                                            </div>
                                            <FontAwesomeIcon icon={faTrash} className="text-2xl text-red-500 absolute right-1 bottom-10 cursor-pointer" onClick={() => { removefromcart(item.id) }} />
                                        </div>


                                    </>
                                )
                            })}

                        </div>
                        <div className="border-2 border-black text-3xl self-start">
                            <p className="p-3 border-2 border-black">ORDER SUMMARY</p>
                            <p className="p-3 border-2 border-black text-black font-bold">Total : <span className="text-red-500">{totalPrice}</span></p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Cart