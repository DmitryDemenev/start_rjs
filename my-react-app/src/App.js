import Message from './components/Message';
import React from 'react';


function App() {
  
  const name = "React"

  return (
    
    <div className="App">

      <Message name = {name}/>

    </div>
  );
}

export default App;
