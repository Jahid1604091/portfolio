import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import resumeData from '../data/resumeData'
import Card from './Card'

const Resume = () => {
    // console.log(resumeData[2].tools[1].lang);
    // console.log(resumeData[2].tools.length);
    const langLen = resumeData[2].languages.length

    const toolsLen = resumeData[3].tools.length
    // console.log(resumeData[3].tools[0]);
    // let tools = '<ul className="d-flex">
    // for (let i = 0; i < toolsLen; i++) {
    //     tools +='<li>'+ resumeData[3].tools[i]+ '</li>'

    // }
    // tools += '</ul>'
    // console.log(tools);


    const resume_variant = {
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
                variants={resume_variant}
                initial='hidden'
                animate='visible'

                className="resume my-2">
                <div className='container'>
                    <div className="row">
                        {
                            resumeData.map((data, index) => (
                                <div className="col-lg-6" key={index}>
                                    <Card height='200'>
                                        <h4 className='text-uppercase fw-bold'>{data.title}</h4>
                                        <p className="lead">{data.designation}</p>
                                        <p>{data.desc}</p>

                                        {
                                            data.languages && (
                                                <ul className='languages'>
                                                    {
                                                        resumeData[2].languages.map((data, idx) => (
                                                            <li key={idx}>{data.lang}</li>
                                                        ))

                                                    }
                                                </ul>
                                            )
                                        }


                                        {
                                            data.tools && (
                                                <ul>
                                                    {
                                                        resumeData[3].tools.map((data, idx) => (
                                                            <li key={idx}>{data}</li>
                                                        ))

                                                    }
                                                </ul>
                                            )
                                        }




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

const Wrapper = styled.article`
.resume{
    
    
    ul{
        padding-left: 0;
        li{
            display: inline-block;
            /* float: left; */
            margin:0 5px;
            padding:5px;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
            text-transform: uppercase;
            line-height: 10px;
            border: 1px solid var(--clr-primary-2);
            border-radius: 10%;
            color: var(--clr-primary-9);
            background-color: var(--clr-primary-2);;
        }
    }
}

@media screen and (max-width:575px){
        .resume{
            h4{
                font-size: 16px;
                margin-bottom: 1px;
            }
            .lead{
                font-size: 14px;
                font-style: italic;
            }
         
        }
    }


@media screen and (max-width:350px){
    .languages{
                li{
                    font-size: 8px;
                }
            }
}
`

export default Resume
