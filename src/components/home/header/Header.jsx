import React, { useState } from "react"
import { Link } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'


const Header = () => {
    const [sidebar, setSidebar] = useState (false)
    /*NAV STATIC*/ 
    window.addEventListener("scroll",function (){
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 200)
    } )
    return ( 
        <>
            <header className='header'>
                <div className='container flex'>
                    <div className='logo'>
                        <h3 className='logoHeder'>Dayana Martinez</h3>
                    </div>
                    {/*NAV*/}
                    <div className='nav'>
                        <ul className= {sidebar ? "nav-links-sidebar": "nav-links"} onClick={() => setSidebar(false)}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/portfolio'>Portfolio</Link></li>
                            <li><Link to='/work'>Work</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    {/*MENU*/}
                    <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar) }>
                        {sidebar ? <CloseIcon/> : <MenuIcon/>}
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
