import React from 'react';
import {useState} from 'react';

function Handleform(){
    const [name,setName]=useState('')
    const [tnc,setTnc] = useState(false)
    const [interest,setInterest]=useState('')
function getFormData(e){
    console.warn(name,tnc,interest)
    e.preventDefault()
}




    return(
        <div>
            <h2> Handle form in react</h2>
            <form onSubmit={getFormData}>
                <input type='text' placeholder='enter the name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Select Options</option>
                    <option>marvel</option>
                    <option>dc</option>
                    <option>vivek</option>
                    <option>vishal</option>cd 
                    <option>atul</option>
                </select><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span> Accept terms and condition</span><br/><br/>
                <button type='submit'>Submit</button>
                <input type="reset"/> 
            </form>
        </div>
    )
}
export default Handleform;