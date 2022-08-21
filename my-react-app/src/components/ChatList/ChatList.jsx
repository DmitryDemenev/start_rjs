import React from 'react';
import {ChatName} from './ChatName';
const chats = [
    {name : "Вася",
    id:1},
    {name : "James",
    id:2},
]
export const ChatList = () => {
    return(
    chats.map((chat) =>
        <ChatName key = {chat.id}
        name = {chat.name}/>)
    )
}