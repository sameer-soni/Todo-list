import React, { useState, useEffect } from 'react'
import './Body2.css'
import './time.js'
import {Todo} from "./Todo";
import {AddItems} from "./AddItems";
const getlocalitems =()=>{
  let init;
  if(localStorage.getItem('myList')===null){
    return [];
  }else{
   return JSON.parse(localStorage.getItem('myList'))
  }
}
export const Body2 = () => {
  
  
  const onDelete=(title)=>{
    console.log('on delete..', title)
    
    setItems(todoitems.filter((e)=>{
        return e!= title
    }))
    // localStorage.getItem('myList');
  }

  const onSubmit=(input)=>{
    console.log("its the body2 log: ", input)
    const mytodo = {title:input}
    setItems([...todoitems, mytodo]);
    // localStorage.setItem
  }
  const [todoitems, setItems]= useState(getlocalitems())

  useEffect(() => {
    localStorage.setItem('myList', JSON.stringify(todoitems));    
  }, [todoitems])
  

  
  return (  
    <>
    {/* <img style={{maxHeight:"99%", maxWidth:"100%"}} src={require("./image/ing.jpg")} alt="" /> */}
    <div className="bg">
        <div className="mainContainer">
            <div className="timeBox">
                <span id='hr'></span>
                <span>:</span>
                <span id='min'></span>
                <span>:</span>
                <span id='sec'></span>
                <span id='ap'></span>
                <script src="time.js"></script>
            </div>
            <div id='dateName'>Tuesday</div>
            <div className="listing">
                <AddItems addSubmit={onSubmit}/>
                <Todo todos={todoitems} deletekrdo={onDelete}/>
            </div>
        </div>
    </div>
    </>
  )
}
