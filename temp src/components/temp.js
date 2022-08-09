import React,{useEffect, useState} from "react"
// import React from "react";
import "./temp.css";

const TempApp = () =>{
    const[city,setCity]= useState(null);
    const[search,setSearch]=useState("Mumbai");
    useEffect( () => {
        const fetchApi = async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c014914fd1be67c0a9fac3e9ca59a31a`;
            const response= await fetch(url);
            const resJson = await response.json();
            // console.log(response)
            setCity(resJson.main);
        };
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
        <div className="inputData">
            <input type="search" value ={search}placeholder="enter the name of the city" className="inputField"
            onChange={(event)=>{ setSearch(event.target.value)

            }}/>
        </div>
{
    !city?(
        <p>No Data Found</p>
    ):(
        <div>
        <div className="info">
        <h2 className="location">


        <i className="fas fa-street-view"></i>{search}</h2>
        
        <h1 className="temp">
            {city.temp} °Cel
        </h1>
        <h3 className="tempmin_max"> Min: {city.temp_min}°Cel | Max : {city.temp_max}°Cel
        
        </h3>


    </div>
    <div className= "wave1"></div>
    <div className= "wave2"></div>
    <div className= "wave3"></div>
    </div>)
    
    }

     
        </div>
        </>
    )
}

export default TempApp;