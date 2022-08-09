import React from 'react';
import {useState} from "react";
import { useEffect } from 'react';


export default function Effect() {
    const[data,setData]= useState(0);
    

    return (
    <div>
        <h2> start using your useEffect {data} </h2>
        <button onClick={()=>{setData(data+1)}}> add value</button>
    </div>
)                                                                                                                                                                       
}

