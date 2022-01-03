import React from 'react'
import styled from 'styled-components'

const Card = ({ children, height }) => {
    return (
        <Wrapper>
            <div style={{ height: `${height}px` }}
                className="card my-2 shadow text-center">
                <div className="card-body">
                    {children}
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`


`

export default Card
