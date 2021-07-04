
import './App.css';
import Header from "./MyComponent/Header";
import {Todos} from "./MyComponent/Todos";
import { Footer } from "./MyComponent/Footer";
import { Additem } from "./MyComponent/Additem";
import { About } from "./MyComponent/About";
import React, { useState ,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";


function App() {
  let inititem;
  if(localStorage.getItem("storage")===null)
  {
     inititem=[];
  }
  else
  {
    inititem=JSON.parse(localStorage.getItem("storage"));
  }
  const add=(title,desc)=>
  { 
    let sno;  
    console.log("heelo",title,desc);
    if(ar.length===0)
    sno=0;
    else
    {
     let sno=ar[ar.length-1].sno+1;
    }
    const myitem=

    {
       title:title,
       desc:desc,
       sno:sno
      

    }
    sets([...ar,myitem])
   
    console.log(myitem)
    
  }
  const onDelete=(item)=>{
    console.log("I m delete function and delete",item);
    sets(ar.filter((e)=>{
      return e!==item;
    }))
    
  }
  const [ar, sets] = useState(inititem);
  useEffect(() => {
   
    localStorage.setItem("storage",JSON.stringify(ar));
  }, [ar])

  return (
    <>
   <Router>
   <Header title="LEARNING REACT" value={true}/>
   <Switch>
          <Route exact path="/"render={()=>{
           return (
           <> 
            <Additem additem={add} />
            <Todos item={ar} onDelete={onDelete} />
            </>)
          }} >
          {/* {/* /* <Route exact path="/">
          <Additem additem={add} />
          <Todos item={ar} onDelete={onDelete} /> */}
          </Route>  
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
     
    <Footer/>
   </Router>
    </>
  );
}
export default App;
