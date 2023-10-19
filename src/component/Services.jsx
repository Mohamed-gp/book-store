import { faGift, faPaperPlane, faRotate, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Services = () => {
  return (
    <>
        <div className="flex lg:flex-row flex-col container px-4 gap-y-4 font-bold justify-evenly py-6 text-gray-500">
            <div className="flex flex-col gap-1 px-8 border-2 lg:w-2/12 items-center w-full border-gray-500 py-4 rounded-lg  ">
                <FontAwesomeIcon icon={faTruckMoving} />
                <p>Free Shipping</p>
            </div>
            <div className="flex flex-col gap-1 px-8 border-2 lg:w-2/12 items-center w-full border-gray-500 py-4 rounded-lg  ">
                <FontAwesomeIcon icon={faGift} />
                <p>Gift Card</p>
            </div>
            <div className="flex flex-col gap-1 px-8 border-2 lg:w-2/12 items-center w-full border-gray-500 py-4 rounded-lg  ">
                <FontAwesomeIcon icon={faRotate} />
                <p>7 Days Return</p>
            </div>
            <div className="flex flex-col gap-1 px-8 border-2 lg:w-2/12 items-center w-full border-gray-500 py-4 rounded-lg  ">
                <FontAwesomeIcon icon={faPaperPlane} />
                <p>Contact Us</p>
            </div>
        </div>
    </>
  )
}

export default Services