import Message from './components/Message';
import React, { useState, useEffect } from 'react';
import { Form } from './components/Form';


function App() {
  const [ messages , setMessages ] = useState([])
  const author = 'Dmitry'
  const addMessage = (newMessage) => { 
    setMessages([...messages ,{ text: newMessage, author}]);
  }

  useEffect (() => {
    let timeID;
    if (messages[messages.length-1]?.author === author ) {
      timeID = setTimeout(() => {
        setMessages([...messages ,{ text: "Hello, man!!!!", author: "Robocop"}]);        
      }, 1500);            
    }
    
    return() => {
      clearInterval(timeID);
    }

  },[messages])
  

  return (    
    <div className="App">
      <Form onSubmit={addMessage}/>
      {messages.map(message => <Message author = {message.author} text = {message.text}/> )}
    </div>
  );
}

export default App;
