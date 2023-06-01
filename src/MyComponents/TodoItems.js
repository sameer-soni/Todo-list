import React from 'react'
import './Body2.css'

export const TodoItems = (props) => {
    // const divStyle = {
    //     backgroundColor:'red',
    //     margin:'8px'
    // }
  return (
    <>
    <div id='todoitems-container'>
        {/* <span>{props.todo.title}</span> */}
        {/* <input type="checkbox" name="" id="" />{props.todo.title} */}
           <input type="checkbox" name="" id={props.todo.title} className='inputStrike'/>
           
          <label htmlFor={props.todo.title} className='strikeThrough'>{props.todo.title}</label>
        <div onClick={()=>{props.deleteItem(props.todo)}}><i class="fa-thin fa-trash"></i></div>
        
    </div>
    </>
  )
}
