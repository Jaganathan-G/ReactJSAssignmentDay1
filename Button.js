import React from "react"


const handleClick=()=>
{
    alert("button was clicked",this);
}

const Button=({buttonText})=>
{
    return(
        <button className="button" onClick={handleClick}> {buttonText}</button>
    )
    
}

export default Button