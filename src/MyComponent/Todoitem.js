import React from 'react'

export const Todoitem = (props) => {
    return (
    <div >
   <h4>
    {props.item.title}
    </h4>
    <p>{props.item.desc}</p>
    <button className="btn btn-danger" onClick={()=>{props.onDelete(props.item)}}>Delete</button>
    <hr/    >
        </div>
    )
}
