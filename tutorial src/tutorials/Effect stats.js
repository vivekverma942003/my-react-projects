import React from 'react';
import { useState,useEffect } from 'react';
import "./style.css";
import style from "./custom.module.css"

function Effectstats(){
const[count,setCount]= useState(10);
const[data,setData]=useState(200);
useEffect(()=>{
    console.warn("use1run");
},[count])
useEffect(()=>{
    alert("data is "+ data);
},[data])



    return(
        <div>
            <h1 style={{color:'black', backgroundColor:'lightgreen'}}> this is the 2 type style</h1>
            <h1 className={style.success}>this is the third type styiling css</h1>
        <div className='primary'>
            <h1>count : {count}</h1>
            <button onClick={()=>{setCount(count+1)}}> update count </button>
            <h1>data : {data}</h1>
            <button onClick={()=>{setData(data+1)}}> update data </button>
        </div>
        </div>

    )
}
export default Effectstats;     