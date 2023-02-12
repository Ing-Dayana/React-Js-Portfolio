import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='grid2'>
                    
                    <div className='box'>
                        <h1>DAYANA VANESSA</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere odit quibusdam sint totam? Asperiores, quam?</p>
                        <div className='socialIcon'>
                            <i class="bi bi-github"></i>
                            <i class="bi bi-behance"></i>
                            <i class="bi bi-linkedin"></i>
                            <i class="bi bi-whatsapp"></i>
                            <i class="bi bi-dribbble"></i>
                            <i class="bi bi-pinterest"></i>
                        </div>
                    </div>

                    <div className='box'>
                        <h2>Quick Links</h2>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Portfolio</li>
                                <li>Work</li>
                                <li>Contact</li>
                            </ul>
                    </div>
                
                    <div className='box'>
                        <h2>Recent Post</h2>
                        <div className='text'>
                            <p><span>28 Lorem</span>Lorem ipsum quiburio</p>
                        </div>
                        <div className='text'>
                            <p><span>28 Lorem</span>Lorem ipsum quiburio</p>
                        </div>
                        <div className='text'>
                            <p><span>28 Lorem</span>Lorem ipsum quiburio</p>
                        </div>    
                    </div>

                    <div className='box'>
                        <h2>Gat in Touch</h2>
                        <p>Lorem ipsum dolor quibuipsumsint totam? Asperioo</p>
                        <div className='iconbox'>
                            <div className='icon'>
                                <i class="bi bi-geo-alt-fill"></i>
                                <label htmlFor='/'>27 Division St, New York, NY 10002, USA</label>
                            </div>
                            <div className='icon'>
                                <i class="bi bi-telephone-fill"></i>
                                <label htmlFor='/'>55 646 260 86 95</label>
                            </div>
                            <div className='icon'>
                                <i class="bi bi-envelope-fill"></i>
                                <label htmlFor='/'>davamaju24@gmail.com</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='legal'>
                    <p>Copyright @2022. All rights reserved.</p>
                    <label htmlFor='/'>Design and Developed by Dayana Martinez</label>
                </div>
            </footer>
        </>
    )
}

export default Footer
