import React, {useState} from 'react'
import './robert.css'
import { Link } from 'gatsby'

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const menuState = !menuOpen ? "hidden" : ""
     
    return(
        <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <Link to={"/"} className="font-semibold text-xl tracking-tight">Robert Lovin</Link>
            </div>
            <div className="block lg:hidden">
                <button 
                        className="flex items-center px-3 py-2 border 
                            rounded menu-text border-gray-400 
                            hover:text-gray hover:border-black"
                        onClick={!menuOpen ? () => setMenuOpen(true) : () => setMenuOpen(false)}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${menuState}`}>
                <Link to={'/'} className="block px-4 py-2 lg:inline-block lg:mt-0 menu-text hover:text-gray mr-4">
                    Home
                </Link>
                {/* <Link to={"#projects"}className="block px-4 py-2 lg:inline-block lg:mt-0 menu-text hover:text-gray mr-4">
                    Projects
                </Link> */}
                <Link to={'/blog'} className="block px-4 py-2 lg:inline-block lg:mt-0 menu-texthover:text-gray mr-4">
                    Blog
                </Link>
            </div>    
        </nav>
    )
}

export default Header