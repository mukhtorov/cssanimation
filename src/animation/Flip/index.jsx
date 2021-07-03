import React from 'react'
import { Container } from './style'
 const Flip = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}


export default Flip