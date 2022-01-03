import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import all_projects from '../data/projects'
import { motion } from 'framer-motion'

const all_types = ['all', ...new Set(all_projects.map(t => t.type))]

const Projects = () => {
    const [projects, setProjects] = useState(all_projects)
    const [types, setTypes] = useState(all_types)

    const filterProjects = (name) => {
        if(name==='all'){
            setProjects(all_projects)
            return
        }
        const filtered_projects = all_projects.filter(p => p.type === name)
        console.log(filtered_projects);
        setProjects(filtered_projects)
    }
    
    const project_variant = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity: 1,
            transition:{
                delay:0.2, duration:0.5,
            }
        }
    }

    return (
        <Wrapper>

            <motion.div 
            variants={project_variant}
            initial='hidden'
            animate='visible'
            className="projects">
                <div className="row">

                    <div className="projects_nav">
                        <ul>
                            {
                                types.map((type, idx) => (
                                    <li
                                        type='button'
                                        className='mx-2 fw-bold'
                                        key={idx}
                                        onClick={() => filterProjects(type)}>{type}</li>
                                ))
                            }
                        </ul>

                    </div>

                    {
                        projects.map((data, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="card my-2 shadow">
                                    <div className="card-body text-center">
                                        <img src={data.image} alt="" className='img-fluid shadow' />
                                        <p className="lead p-2">{data.title}</p>
                                        <div className="d-flex justify-content-between">
                                            {data.github ? <a href={data.github} rel='noreferrer' target='_blank'> <i className="fab fa-github"></i></a> : ''}
                                            <a href={data.url} rel='noreferrer' target='_blank'>see now</a>
                                            <strong>{data.type}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>

            </motion.div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    /* overflow-y: scroll;
    overflow-x: hidden; */

    .projects{
        img{
            height: 150px;
        }
        a{
            color: var(--clr-primary-1);
        }

        .projects_nav{
            ul{
                padding-left: 0;
                display: flex;
                justify-content: center;
                li{
                    white-space: nowrap;
                    margin: 5px;
                    padding:5px;
                }
            }
        }
    }
}

    @media screen and (max-width:575px){
    .projects{
        .projects_nav{
            ul{
                display: inline-block;
                text-align: center;
                li{
                    display: inline-block;
                    
                    /* overflow: hidden; */
                    
                    
                }
            }
        }
    }
      
    
`
export default Projects
