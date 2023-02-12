import React from 'react'

const About = () => {
    const Progress = ({done, title}) => {
        return(
            <div className='progress'>
                <div className='progress-done' style={{opacity:1,width:`${done}%`}}>
                    <h4>{title}</h4>
                    <h4>{done} %</h4>
                </div>
            </div>
        )
    }

    const data = [
        {   /*Like ROOT in css*/
            title: "Who I Am And What I Do",
            desc1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
            desc2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
    ]

    return(
        <>
            <section className='about TopMargin'>
                <div className='flex'>
                    {
                        data.map((val) =>{
                            return(
                                <>
                                    <div className='left mtop'>
                                        <div className='heading'>
                                            <h3>About Me</h3>
                                            <h1>{val.title}</h1>
                                        </div>
                                        <p>{val.desc1}</p>
                                        <p>{val.desc2}</p>
                                        <button className='primary-btn'>See more</button>
                                    </div>
                                    <div className='right mtop'>
                                        <div className='heading'>
                                            <h3>About Me</h3>
                                            <h1>My basic skills</h1>
                                        </div>
                                        <div className='mtop'>
                                            <Progress done='70' title='HTML'/>
                                            <Progress done='80' title='CSS'/>
                                            <Progress done='90' title='JavaScript'/>
                                            <Progress done='80' title='React'/>
                                        </div>
                                    </div>
                                </>
                            
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default About 