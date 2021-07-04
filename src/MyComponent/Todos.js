import React from 'react'
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  let mystyle=
  {
      Height:"auto",
    //   marginBottom:"30px"
  }
    return (

        <div className="container my-3" style={mystyle}>
        <h3 className="text-center">TO DO'S LIST</h3>
        {props.item.length===0?"No items present":
         props.item.map((item)=>{
          return <Todoitem item={item} key={item.sno} onDelete={props.onDelete}/>
       })}
       </div>

    )
}
