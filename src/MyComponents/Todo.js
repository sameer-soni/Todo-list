import React from 'react'
import {TodoItems} from "./TodoItems";

export const Todo = ({todos, deletekrdo}) => {
  const empty  = {
    textAlign: 'center',
    backgroundColor: 'rgba(248, 248, 248, 0.411)',
    margin: '12px 30px',
    border:'radius: 4px',
    padding: '5px 2px',
    fontFamily: 'Shadows Into Light',
    fontSize:'30px',
    // fontWeight: 'bold',
    color:'red'

  }
  return (
    // <TodoItems todo={props.todos} />
    <>
    {todos.length === 0 ? 
      (<div style={empty}>EMPTY!</div> ): (todos.map((e)=>{
        return <TodoItems todo={e} deleteItem={deletekrdo} />
      })) 
    }

     {/* {props.todos.map((e)=>{
        return <TodoItems todo={e} deleteItem={props.deletekrdo}/>
    })} */}
   
    </>
    
  )
}
