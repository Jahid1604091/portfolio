import React from 'react'
import styled from 'styled-components'
import me from '../images/me2.jpg'
import cv from '../data/CV_updated.pdf'
import social_links from '../data/social_links'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const sendEmail = () => {
        window.open("mailto:jahid.modernweb@gmail.com")
    }

    const sidebar_var = {
        hidden: {
            x: '-20vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }



    return (
        <Wrapper>
            <motion.div
                variants={sidebar_var}
                initial='hidden'
                animate='visible'
                className="sidebar">
                <img src={me} alt="" />
                <h1>Jahid Hasan</h1>
                <h2>Web developer</h2>
                <a href={cv} target='_blank' download='cv.pdf'>
                    <h3><i className="fas fa-download"></i> download resume</h3>
                </a>

                <div className="social-links">
                    <ul>
                        {
                            social_links.map((data, idx) => (

                                <li key={idx}> <a href={data.url}>{data.icon}</a></li>
                            ))
                        }

                    </ul>
                </div>

                <div className="contact">
                    <ul>
                        <li><i className="fas fa-map"></i> Khagdohor, mymensingh, Bangladesh</li>
                        <li><i className="fas fa-phone"></i> +880 1715-150941</li>
                        <li className='text-lowercase'><i className="fas fa-envelope"></i> jahid.modernweb@gmail.com</li>
                    </ul>
                    <button type='button' onClick={() => sendEmail()} className='btn'>Email Me</button>
                </div>
            </motion.div>

        </Wrapper>
    )
}

const Wrapper = styled.article`
   
    @import url('https://fonts.googleapis.com/css2?family=Caramel&display=swap');
    
    .sidebar{
        position: fixed;
        left: 0;
        min-height:90vh;
        margin: 20px 0;
        padding: 20px;
        border: 1px #fff;
        border-radius: 10px;
        /* box-shadow: var(--dark-shadow); */
        text-align: center;
        color: var(--clr-primary-10);
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border: 2px solid var(--clr-primary-9);
            box-shadow: var(--dark-shadow);
            text-align: center;
            justify-content: center;
            align-items: center;
            
        }
        h1{
            font-family: 'Caramel', cursive;
            font-size: 50px;
            font-weight: 800;
            letter-spacing: 2px;
            
        }

        h2{
            font-size: 20px;
            background-color: var(--clr-primary-2);
            padding: 5px;
            border-radius: 20px;
            box-shadow: var(--dark-shadow);
        }

        h3{
            font-size: 18px;
            color: var(--clr-primary-9);
            margin: 5px 0;
        }
    
        .social-links{
            margin: 5px 0;
            ul{
                display: flex;
                justify-content: center;
                padding-left: 0;
                li{
                    
                    margin: 0 10px;
                    &:hover a{
                        /* background: var(--clr-primary-9); */
                        color: var(--clr-primary-9);
                    }
                    a{
                        transition: var(--transition);
                        text-align: center;
                        border-radius: 50%;
                        font-size: 20px;
                        color: var(--clr-primary-2);
                        font-weight: 700;
                        box-shadow: var(--light-shadow);
                    }
                }
            }
        }
        .contact{
            padding: 10px 0;
            ul{
                text-align: center;
                padding-left: 0;
                li{
                    margin:5px;
                    font-size: 16px;
                }
            }
        }
    }


    @media screen and (max-width:1023px){
        .sidebar{
            position: static;
            h1{
                font-size: 40px;
                font-weight: 600;
            }
        }
    }
`

export default Sidebar
