import  React from 'react';
import './RecipieTile.css';

export default function RecipieTile({recipe}){




    return(
        
        <div className='RecipieTile'>
            <img src={recipe["recipe"]["image"]} className="recipepic"/>
            <p className='recipename'>{recipe["recipe"]["label"]}</p>
        </div>
    
    );
}