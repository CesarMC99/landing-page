import { HashLink } from "react-router-hash-link"
import { links } from "./links"
import { FaBars } from "react-icons/fa";
import "./navigation.css"
import { useEffect } from "react";
import { useState } from "react";

export const Navigation = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 64);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false)

  const openNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <nav className={`navigation-primary ${isScrolled ? "scrolled" : ""} ${isOpen ? "styles-movible-nav" : ""}`}>
          <div className={`header-nav ${isOpen ? "header-movile" : ""}`}>
            <div className="container-logo-bar">
                <img className="navigation-logo" src="https://ryrbuilding.com/wp-content/themes/ryrbuilding/assets/images/logos/logo.png" alt="logo-empresa" />
                <FaBars className="nav-bar" onClick={openNav}/>
            </div>
            {/* <div className="navigation-bar">
              <FaBars />
            </div> */}
            <ul className={`navigation-links ${isOpen ? "open-nav" : ""}`}>
                {links.map(link => (
                  <li key={link.id} className="navigation-links--item">
                    <HashLink smooth to={link.link} className="nav-link">
                      {link.name}
                    </HashLink>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
    </>
  )
}