import React, { useState } from 'react'
import './Body2.css'

export const AddItems = (props) => {

  const [input, setinput] = useState("");  

  const Submit = (f) => {
    f.preventDefault();
    if(!input){
      alert("can't be empty");
    }
    else{
    console.log(input);
    setinput('');
    props.addSubmit(input);
    }
  }
  return (
    <div id='addInputField'>
      <form action="" onSubmit={Submit} >
        <input type="text" placeholder='Add Your Task...' value={input} onChange={(f)=>setinput(f.target.value)}/>
        <button>+</button>
      </form>
    </div>
  )
}
