import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import about from '../data/about'
import Card from './Card'

const About = () => {
    const about_variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.5,
            }
        }
    }
    return (
        <Wrapper>
            <motion.div
                variants={about_variant}
                initial='hidden'
                animate='visible'
                className='about'>
                <p className='pt-2 lead'>Hi, this is Jahid Hasan and I’m passionate about all thing about JavaScript. I work hard and care about writing clean, efficient and reusable codes.</p>
                <div className="services">
                    <h4 className='fw-bold text-uppercase py-2 text-center'>what i offer</h4>
                    <div className="row">
                        {
                            about.map((data, index) => (
                                <div className="col-lg-6" key={index}>
                                    <Card height='170'>
                                        {data.icon} <p className="lead">{data.title}</p>
                                        <p className=''>{data.desc}</p>
                                        <strong className=''>{data.tools}</strong>
                                    </Card>
                                </div>
                            ))
                        }


                    </div>

                </div>
            </motion.div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  

    @media screen and (max-width:575px){
        .about{
            .lead{
                font-size: 16px;
                font-weight: 600;
                margin: 0;
            }
        }
    }
`


export default About
