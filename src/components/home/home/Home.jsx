import React from "react"
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import CV from './cvitae.pdf'
import CTA from './CTA'

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container flex">

                    <div className="left">
                        <div className="img">
                            <img src="./assets/back.png" alt="" className="avatar back"/>
                            <img src="./assets/home.png" alt="" className="avatar front"/>
                        </div>
                    </div>

                    <div className="right topMargin">
                        <h1 className="rightTitle">I AM A WEB DESIGNER <br/> AND DEVELOPER</h1>
                        <h2>Dayana Vanessa</h2>
                        <div className="socialIcon">
                            <i><GitHub icon="fa-brands fa-square-github" /></i>
                            <i><LinkedIn icon="fa-brands fa-linkedin" /></i>
                        </div>
                        <button className="primary-btn"><a href="#contact">Hire me</a></button>
                        <button className="primary-btn"><a href={CV} download>Download CV</a></button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home