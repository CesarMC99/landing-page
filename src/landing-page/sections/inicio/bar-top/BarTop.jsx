import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import "./bar-top.css"

export const BarTop = () => {
  return (
    <div className="social-information">
        <ul className="contact-info">
            <li className="contact-info--item">
                <LiaPhoneVolumeSolid className="social-icon"/>
                444 4444 / 999 999 999
            </li>
            <li className="contact-info--item">
                <IoMailOutline className="social-icon"/>
                example@example.com
            </li>
        </ul>

        <nav>
            <ul className="social-network">
                <li className="social-network--item">
                    <a href="#" className="social-newtwork--link">
                        <FaFacebookF className="link-social-icon"/>
                    </a> 
                </li>
                <li className="social-network--item">
                    <a href="#" className="social-newtwork--link">  
                        <FaLinkedinIn className="link-social-icon"/>
                    </a>
                </li>
                <li className="social-network--item">
                    <a href="#" className="social-newtwork--link"> 
                        <GrInstagram className="link-social-icon"/>
                        {/* <FaInstagram /> */}
                    </a>
                </li>
                <li className="social-network--item">
                    <a href="#" className="social-newtwork--link"> 
                        <FaYoutube className="link-social-icon"/>
                    </a>
                </li>
            </ul> 
        </nav> 
    </div>
  )
}