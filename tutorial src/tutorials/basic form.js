import React from 'react';
import {useState} from 'react';

function BasicForm(){
    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError] = useState("");   

    const userHandler=(v)=>{
        let item = v.target.value;
        if(item.length<=3){
            setError(true);
        }
        else{
            setError(false);

        }
        console.warn(v.target.value.length);
    }
    const passwordHandler = (j)=>{
        let item1 = j.target.value;
        if(item1.length<=8){
            setPassword(true)
        }
        else{
            setPassword(false);
        }
    }

    function FileHandle(e){
        alert("you have submitted your page");
        e.preventDefault();
    }


    return(
        <div>
            <h1>Basic Form</h1>
            <form onSubmit={FileHandle}>
                <input type="text" placeholder="enter your ID"  onChange={userHandler}/><br/>
                {error?<span>Input is not Valid</span>:""}
                <input type="text" placeholder="enter your password" onChange={passwordHandler}></input>
                {password?<span>Enter the valid password</span>:""}<br/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default BasicForm;