import React from 'react';
import { useState } from 'react';


function ConditionalRendering(){
    const [login,setLogin]=useState(3)
    



    return(
        <div className='rendering'>
            {
                login==1?<h1>welcome vivek</h1>:login==2?<h1>welcome guest</h1>:
                <h2>welcome third person</h2>
            }

    </div>
)

}

export default ConditionalRendering;