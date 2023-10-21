import { faArrowRight ,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Slider = () => {
    const [currentslide,setcurrentslide] = useState(0)
  const sliding = (direction) => {
    if (direction == "toright") {
        setcurrentslide(currentslide => currentslide + 1)
    }
    else{
        setcurrentslide(currentslide => currentslide - 1)
    }
  };

  return (
    <>
      <div className="flex slider relative duration-1000" style={{transform: `translateX(${currentslide * -100}vw)`}}>
        <div className="flex w-screen md:text-left text-center md:flex-row flex-col justify-center md:justify-evenly  relative  items-center first-slide-gradient py-4">
          <div className="w-40 lg:w-72">
            <img src="/assets/bookspng/book1.png" alt="book-one-png" />
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <p className="text-lg lg:text-5xl font-bold">Book Store</p>
            <p className="text-base lg:text-2xl font-bold  opacity-50">
              It's not just reading. it's living the adventure
            </p>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="absolute right-8 lg:right-11  text-5xl text-white top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => sliding("toright")}
          />
        </div>
        <div className="flex  w-screen md:text-left text-center md:flex-row flex-col justify-center md:justify-evenly relative  items-center second-slide-gradient py-4">
          <div className="w-40 lg:w-72">
            <img src="/assets/bookspng/book2.png" alt="book-one-png" />
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <p className="text-lg lg:text-5xl font-bold">The Books For Everyone</p>
            <p className="text-base lg:text-2xl font-bold  opacity-50">
                You can read at the bookstore or at home
            </p>
          </div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="absolute left-8 lg:left-11  text-5xl text-white top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => sliding("toleft")}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            className="absolute right-8 lg:right-11  text-5xl text-white top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => sliding("toright")}
          />
        </div>
        <div className="flex w-screen md:text-left text-center md:flex-row flex-col justify-center md:justify-evenly relative third-slide-gradient bg-green-500  items-center py-4">
          <div className="w-40 lg:w-72">
            <img src="/assets/bookspng/book3.png" alt="book-one-png" />
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            <p className="text-lg lg:text-5xl font-bold">Check Out The New Titles</p>
            <p className="text-base lg:text-2xl font-bold  opacity-50">
                We send you the book you want at home
            </p>
          </div>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="absolute left-8 lg:left-11  text-5xl text-white top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => sliding("toleft")}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
