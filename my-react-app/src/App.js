import React, { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { MessageList } from './components/Message/MessageList';
import { ChatList } from './components/ChatList/ChatList';
import './style.css';

function App() {
  const [ messages , setMessages ] = useState([])
  const AUTHORS = {
    human:'Dmitry',
    robot:'Robot'
}
  const addMessage = (newMessage) => { 
    setMessages([...messages ,{ text: newMessage, author : AUTHORS.human, id: messages.length}]);
  }
  useEffect (() => {
    let timeID;
    if (messages[messages.length-1]?.author === AUTHORS.human ) {
      timeID = setTimeout(() => {
        setMessages([...messages ,{ text: "Hello, man!!!!", author: AUTHORS.robot, id: messages.length}]);        
      }, 1500);
              
    }    
    return() => {
      clearInterval(timeID);
    }
  },[messages])

  return (    
    <div className="App container">
      <ChatList className="chatlist"/>
      <div>
        <MessageList className="messagelist" messages = {messages}/>
        <Form onSubmit={addMessage}/>
      </div>
    </div>
  );
}

export default App;



