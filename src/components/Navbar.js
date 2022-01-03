import { motion } from 'framer-motion'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const [active,setActive] = useState('')

    useEffect(()=>{
        let currentUrl = window.location.href
        
        if(currentUrl.endsWith('/')){
            setActive('About')
        }
        else if(currentUrl.endsWith('/projects')){
            setActive('Projects')
        }
        else if(currentUrl.endsWith('/resume')){
            setActive('Resume')
        }
    },[active])

    const navbar_variant = {
        hidden:{
            y:'-30vh',
            opacity:0
        },
        visible:{
            y:0,
            opacity: 1,
            transition:{
                delay:0.1, duration:0.5, type:'spring'
            }
        }
    }

    return (
        <Wrapper>
            <motion.nav 
            variants={navbar_variant}
            initial='hidden'
            animate='visible'
            className=''>
                <div className="active">
                   <h3>{active}</h3>
                </div>
                <ul className="nav-items">
                    {active !=='About' && <li><Link onClick={()=>setActive('About')} to="/">About</Link></li>}
                    {active !=='Projects' && <li><Link onClick={()=>setActive('Projects')} to="/projects">Projects</Link></li>}
                    {active !=='Resume' && <li><Link onClick={()=>setActive('Resume')} to="/resume">Resume</Link></li>}
                </ul>
            </motion.nav>


        </Wrapper>
    )
}

const Wrapper = styled.section`
 nav{

     display: flex;
     justify-content: space-between;
     box-shadow: var(--b-shadow);
     z-index:1;
    .active{
        h3{
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 5px;
            color: var(--clr-grey-1);
            font-size: 26px;
            padding-left: 5px;
        }
    }
     ul{
        display: flex;
        justify-content: center;
        padding-left: 0;
        li{
            margin: 0 10px;
            a{
                text-decoration: underline;
                text-transform: uppercase;
                font-size: 18px;
                color: var(--clr-primary-1);
            }
        }
     }
 }

 @media screen and (max-width:575px){
        nav{
            display: block;
            text-align: center;

        }
    }
`
export default Navbar
