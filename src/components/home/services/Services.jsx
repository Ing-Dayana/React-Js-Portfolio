import React from 'react'

const Services = () => {
        const ServicesData = [
        {
            id: 1,
            title: "Web Design UI",
            desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
            cover: "./assets/services-img/services-1.jpg",
        },
        {
            id: 2,
            title: "Development",
            desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
            cover: "./assets/services-img/services-2.jpg",
        },
        {
            id: 3,
            title: "Community Manager",
            desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
            cover: "./assets/services-img/services-3.jpg",
        },
        {
            id: 4,
            title: "Legal Text for your Website",
            desc: "Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.",
            cover: "./assets/services-img/services-4.jpg",
        }
    ]

    return (
        <>
            <section className='services'>
                <div className='container'>
                    <div className='heading'>
                        <h3>Lorem snrjjdfndg </h3>
                        <h1>MY SERVICES</h1>
                    </div>

                    <div className='content grid topMargin'>
                        {ServicesData.map((val) => {
                            return (
                                <>
                                    <div className='box'>
                                        <div>
                                            <img className='image-services' src={val.cover} alt=''></img>
                                        </div>
                                        <div className='text'>
                                            <h2 className='title-services'>{val.title}</h2>
                                            <p>{val.desc}</p>
                                            <div className='links-services'><a className='git' href='/'>INFO</a><a className='demo' href='/'>CONTACT</a></div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>  
            </section>
        </>
    )
}

export default Services
