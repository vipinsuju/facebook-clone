import React from 'react';
import "../UI/Custombutton.css"


const Custombutton = (props) => {
    return (
        
        <button className = {props.style} 
        type = {props.type}       
        >
            {props.children}
        </button>
        
         
    )
}

export default Custombutton;
