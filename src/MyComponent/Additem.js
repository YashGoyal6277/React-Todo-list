
import React, { useState } from 'react';

export const Additem = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc)
    alert("Title or desc cannot be blank");
    else
    {

      props.additem(title,desc);
      settitle("")
      setdesc("")
    }
  }
  

  

    return (
        <div className="container">
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Add Items Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Write Item Description</label>
    <input type="text" className="form-control" value={desc} id="exampleInputPassword1" onChange={(e)=>{setdesc(e.target.value)}}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Add Here</button>
</form>
        </div>
    )
}
