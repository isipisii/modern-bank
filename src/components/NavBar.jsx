import { useState } from "react"
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {

  const [toggle,setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank"
      className="w-[124px] h-[32px]"/>

      <ul className="list-none sm:flex hidden
      justify-end items-center flex-1">
        {navLinks.map((nav, idx) => (
          <li key={nav.id}
            className={`font-poppins
            font-normal cursor-pointer text-[16px]
            ${idx === navLinks.length - 1 ? "m-0" : "mr-10"}
            text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      
      {/* menu toggler */}
      <div className="sm:hidden flex flex-1
      justify-end items-center">
        <img
          src={toggle ? close : menu} 
          alt={toggle ? "close" : "menu"}
          className="w-[28px] h-[28px]
          object-contain"
          onClick={() => setToggle( prev => !prev)}
        />
        
        {/* for mobile menu */}
        <div className={`${toggle ? "flex" : "hidden"} p-6 
        bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl
        sidebar`}>

            <ul className="list-none flex flex-col
            justify-end items-center flex-1">
              {navLinks.map((nav, idx) => (
                <li key={nav.id}
                  className={`font-poppins
                  font-normal cursor-pointer text-[16px]
                  ${idx === navLinks.length - 1 ? "mb-0" : "mb-10"}
                  text-white`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

        </div>
      </div>
    </nav>
  )
}

export default NavBar