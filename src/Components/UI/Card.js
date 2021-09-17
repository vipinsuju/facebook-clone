import React from 'react'
import "../UI/Card.css"


const Card = (props) => {
    return (
        <div className ={props.style} >
            {props.children}
         
        </div>
    )
}

export default Card
