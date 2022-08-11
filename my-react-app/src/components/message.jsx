import React from "react";
import '../style.css'

function Message ({ author, text }){
    return(
        <>
        <p className="redtext">Message: {text}!!!!!</p>
        <p className="redtext">Author: {author}!!!!!</p>
        </>
    )


}
export default Message;