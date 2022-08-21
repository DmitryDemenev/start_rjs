import React from "react";
import '../../style.css';
import { Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';


let avt,avatarColor;

export const Message = ( { author, text }) => {
    
    if (author === 'Dmitry') {
        avt = 'DM'
        avatarColor = deepOrange[500] 
    } else {
        avt = 'bot'
        avatarColor = deepPurple[500]
    }
    

    return(
        <div className="message">
            <Avatar sx={{bgcolor: avatarColor}} >{avt}</Avatar>
            <>
                <p className="message-text">{text}</p>
                <p className="bluetext">{author}</p>
            </>
        </div>
    )
}