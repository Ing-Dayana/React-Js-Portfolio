import React from 'react'

const wrapper = () => {
        const DataTransfer = [
        {
            title: "LOOKING FOR EXCLUSIVE SERVICES?",
            heading: "Get The Best For Your Business",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ]

    return (
        <>
            <section className='wrapper_brand'>
                <section className='branding wrapper'>
                    <div className='container'>
                        {DataTransfer.map((val) => {
                            return(
                                <div className='box'>
                                    <h3>{val.title}</h3>
                                    <h2>{val.heading}</h2>
                                    <p>{val.desc}</p>
                                    <button className='primary-btn'>Contact me</button>
                                </div>
                            )
                        })}</div>
                </section>
            </section>
        </>
    )
}

export default wrapper
