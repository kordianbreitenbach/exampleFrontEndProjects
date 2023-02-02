


import React from 'react';
import {addMessage} from "./redux/TodoActions";
import {deleteMessage} from "./redux/TodoActions";
import  {State}  from './redux/store';
import "./App.css";
import { connect, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';

import {actionCreators} from "./redux/store";
const App =()=> {
  const [input,setInput]=React.useState<string>('');
     const dispatch=useDispatch();
     const {addMessage,deleteMessage}=bindActionCreators(actionCreators,dispatch);

     const messages =useSelector((state:State)=>state.Todo);
      const messeges:any=messages;
  
  
     const handleChange=(event:any)=> {
    setInput(event.target.value);
   }

  const  submitMessage=()=>{

     (addMessage(input));
     setInput('');
   };
  const deleting=(idx:number)=>{
    deleteMessage(idx);
  };
  return (
    <div className="application">
      <h2>Type in a new Message:</h2>
      <input className="input" placeholder="enter message to list"
        value={input}
        onChange={handleChange}/><br/>
      <button className="submit"onClick={submitMessage}>Submit</button>
      <ul>
        {messages.map( (message:string, idx:number) => {
            return (
              <div className="messageSpace"><button className="listButton"onClick={()=>{deleteMessage(idx);  }}>delete</button> <li className="messages" key={idx}>{message}</li></div>
            )
          })
        }
      </ul>
    </div>
  );
   
 };
 
 

export default App;


