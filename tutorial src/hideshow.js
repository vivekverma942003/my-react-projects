import React from 'react'
import{useState} from 'react'

const Header=()=>{
    const[status,setStatus]=React.useState(true);
    
    
    return(
        <div>
        {
            status?<h3>this is hide or show button</h3>:null
        }
    <button onClick={()=>setStatus(!status)}> HideShow</button>

    </div>


)






}
export default Header;