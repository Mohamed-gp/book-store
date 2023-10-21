import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faPhone,
  faUser,
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import {  useContext, useState } from "react";
import cartctx from "../context/cartcontext";


const Header = () => {



  //toggle
  const [toggle, settoggle] = useState(false)
  const opentoggle = () => {
    const menu = document.querySelector(".list")
    settoggle(!toggle)
    menu.classList.remove("menu-closed")
    menu.classList.add("menu-opened")
  }
  const closetoggle = () => {
    const menu = document.querySelector(".list")
    settoggle(!toggle)
    menu.classList.remove("menu-opened")
    menu.classList.add("menu-closed")
  }
  // use context 
  

  const {cartitems} = useContext(cartctx)

  return (
    <>
      <header className="bg-mb text-white pt-3 text-2xl">
        <div className="container flex justify-between items-start px-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-4 mt-2">
              <FontAwesomeIcon icon={faPhone} />
              <p className="text-lg lg:text-2xl">123-456-789</p>
            </div>
            <Link to="/" className="flex items-center gap-1">

              <p>Book</p>
              <BsBook />
              <p>Store</p>
            </Link>
          </div>
          {toggle ? <FontAwesomeIcon icon={faXmark} className="mt-3 cursor-pointer sm:hidden" onClick={closetoggle} /> : <FontAwesomeIcon icon={faBars} className="mt-3 cursor-pointer sm:hidden" onClick={opentoggle} />}
          <div className=" hidden sm:flex flex-col  items-center -mt-3">
            <p className="mb-4 pt-4 text-lg ">Welcome To Online Book Store</p>
            <div className="relative ">
              <input
                type="text"
                className="relative focus:outline-none text-black px-10 py-2 rounded-3xl"
                placeholder="Search In Book Store ..."
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-1/2 -translate-y-1/2 right-4 text-mb" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <Link to="/login" className="flex items-center gap-2 mb-4 mt-2">
              <FontAwesomeIcon icon={faUser} />
              <p className="text-lg lg:text-2xl">Login</p>
            </Link>
            <Link to="/cart" className="flex items-center relative">
              <FontAwesomeIcon icon={faCartShopping} />
              {cartitems.length > 0 ? <p className="w-6 h-6  bg-red-500 rounded-full -top-5 -right-4 text-base font-bold absolute flex justify-center items-center">{cartitems.length}</p> : <></>}
            </Link>
          </div>
        </div>
        <nav className="bg-mbg z-10 text-gray-500 absolute w-48 sm:w-auto h-full top-0 list menu-closed sm:static duration-500">
          <ul className="flex flex-col sm:flex-row sm:justify-center sm:mt-8 text-left sm:text-center">
            <li className="hover:bg-white font-semibold duration-500 h-full pl-4 sm:pl-0 py-4 w-full sm:w-32"><Link to="/">Home</Link></li>
            <li className="hover:bg-white font-semibold duration-500 h-full pl-4 sm:pl-0 py-4 w-full sm:w-32"><Link to="/authors">Authors</Link></li>
            <li className="hover:bg-white font-semibold duration-500 h-full pl-4 sm:pl-0 py-4 w-full sm:w-32"><Link to="/about">About Us</Link></li>
            <li className="hover:bg-white font-semibold duration-500 h-full pl-4 sm:pl-0 py-4 w-full sm:w-32"><Link to="/contact">Contact Us</Link></li>
            <li className="hover:bg-white font-semibold duration-500 h-full pl-4 sm:pl-0 py-4 w-full sm:w-32"><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
