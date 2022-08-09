import logo from './logo.svg';

// import Hide from './HideShow';
import Header from './hideshow'
import Handleform from './handleform';
import ConditionalRendering from './tutorials/ConditionalRendering'
// import BootstrapTable from './table';
import BasicForm from './tutorials/basic form';
import UserData from './tutorials/passing props';
import Render from "./tutorials/Render"
import Constructor from './tutorials/constructor';
import ComponentDidMount from "./tutorials/ComponentDidMount"
import ComponentDidUpdate from './tutorials/ComponentDidUpdate'
import Effect from './tutorials/Effect';
import Effectstats from './tutorials/Effect stats';
import Mybootstrap from './tutorials/bootstrap'
import React, { useState } from 'react'

function App() {
  const[name,setName]=React.useState("vivek");
  const[value,setValue]=useState("vishal");
  
function GetData(){
  alert("hello from the app");
}


  return (
      <>
    <div className="App">
     
      
      {/* /* <Header/> */}
      {/* <Handleform/> */}
      {/* <ConditionalRendering/>   */}
       {/* <BootstrapTable/> */}
      {/* <BasicForm/> */}
      {/* <UserData data={GetData}/> */}
      {/* <Constructor/>  */}
      {/* <Render name={name}/> */}
      {/* <ComponentDidMount/> */}
      {/* <button onClick={()=>setValue("Baranwal")}>click here to update the name</button> */}
      {/* <button onClick={()=>setName("Ayudh")}>click here to update secondname</button> */}
      
      {/* <Effect/> */}
      <Effectstats/>
      <Mybootstrap/>
      {/* <ComponentDidUpdate/> */}
    </div>
      </>
  );
}

export default App;
