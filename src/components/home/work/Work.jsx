import React from 'react'


const Work = () => {
        const Data = [
    {
        id: 1,
        title: "Digital Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cover: "./assets/work/work1.jpg",
    },
    {
        id: 2,
        title: "Digital Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cover: "./assets/work/work2.jpg",
    },
    {
        id: 3,
        title: "Digital Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cover: "./assets/work/work3.jpg",
    },
    {
        id: 4,
        title: "Digital Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cover: "./assets/work/work4.jpg",
    },
    {
        id: 5,
        title: "Digital Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cover: "./assets/work/work5.jpg",
    },
    {
        id: 6,
        title: "Digital Marketing",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cover: "./assets/work/work6.jpg",
    },
    ]
    return (
        <>
            <section className='work'>
                <div className='heading'>
                    <h3>MY WORKS </h3>
                    <h3>Some of my competed projects</h3>
                </div>

                <div className='content'>
                    <div className='box contenedor'>
                        <div className='img'>
                            <img src='./assets/work/work1.jpg' alt='img'></img>
                        </div>
                        <div className='overlay'>
                            <div className='text'>
                                <h1><a href='/'>Digital Marketing</a></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className='box contenedor'>
                        <div className='img'>
                            <img src='./assets/work/work2.jpg' alt='img'></img>
                        </div>
                        <div className='overlay'>
                            <div className='text'>
                                <h1><a href='/'>Digital Marketing</a></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className='box contenedor'>
                        <div className='img'>
                            <img src='./assets/work/work3.jpg' alt='img'></img>
                        </div>
                        <div className='overlay'>
                            <div className='text'>
                                <h1><a href='/'>Digital Marketing</a></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>

                    <div className='box contenedor'>
                        <div className='img'>
                            <img src='./assets/work/work4.jpg' alt='img'></img>
                        </div>
                        <div className='overlay'>
                            <div className='text'>
                                <h1><a href='/'>Digital Marketing</a></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work

