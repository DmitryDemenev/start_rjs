import React from 'react';
import {Message} from './Message';

export const MessageList = ({messages}) => {
    return(
    messages.map((message) =>
        <Message key = {message.id}
        author = {message.author}
        text = {message.text}/>)
    )
}