import React from "react";
import '../../style.css';
export const ChatName = ( { name }) => {   

    return(
        <div className="chat">
            <p className="chat-name">{name}</p>
        </div>
    )
}