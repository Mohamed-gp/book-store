import { faFacebook, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="mt-16 bg-mb text-white">
        <div className="container  flex flex-col justify-between px-6">
          <div className="flex justify-between items-center py-6 border-b-2">
            <p className="text-xl">Follow us on social media</p>
            <div className="flex gap-6">
              <div className="flex justify-center w-10 h-10 rounded-full items-center bg-white">
                <FontAwesomeIcon icon={faFacebook} className="fa-fw text-3xl text-mb" />
              </div>
              <div className="flex justify-center w-10 h-10 rounded-full items-center bg-white">
                <FontAwesomeIcon icon={faTelegram} className="fa-fw text-3xl text-blue-800" />
              </div>
              <div className="flex justify-center w-10 h-10 rounded-full items-center bg-white">
                <FontAwesomeIcon icon={faInstagram} className="fa-fw text-3xl text-red-500" />
              </div>
              <div className="flex justify-center w-10 h-10 rounded-full items-center bg-white">
                <FontAwesomeIcon icon={faTwitter} className="fa-fw text-3xl text-blue-400" />
              </div>

            </div>
          </div>
          <div className="flex justify-between flex-col sm:flex-row py-6">
            <div className="mb-6">
              <p className="title mb-2 border-b-2 text-2xl font-bold">Usefull Links</p>
              <div className="flex flex-col">
                
                <Link to="/">Home</Link>
                <Link to="/authors">Authors</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
            <div>
              <p className="title mb-2 border-b-2 text-2xl font-bold">Usefull Links</p>
              <div className="flex flex-col">
                
                <Link to="/">Home</Link>
                <Link to="/authors">Authors</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
            <div>
              <p className="title mb-2 border-b-2 text-2xl font-bold">Usefull Links</p>
              <div className="flex flex-col">
                
                <Link to="/">Home</Link>
                <Link to="/authors">Authors</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer