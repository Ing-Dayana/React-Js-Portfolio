import React from 'react'
import Home from "../home/home/Home"
import About from "../home/about/About"
import Branding from "../home/Branding"
import Services from "../home/services/Services"
import Work from "../home/work/Work"
import Wrapper from "../home/Wrapper"
import Footer from "../home/Footer"


const HomePages = () => {
    return (
        <>
            <Home/>
            <About/>
            <Branding/>
            <Services/>
            <Work/>
            <Wrapper/>
            <Footer/>
        </>
    )
}

export default HomePages
