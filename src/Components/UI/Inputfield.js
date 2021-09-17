import React from 'react'
import "../UI/Inputfield.css";


const Inputfield = (props) => {
    return (
        
            <input className = {props.style}  
            
            placeholder = {props.placeholder}
            type = {props.type}
            >
                {props.children}
            
            </input>
            
      
    )
}

export default Inputfield
