import React from 'react';


class ComponentDidUpdate extends React.Component{
constructor(){
super();
{
    console.warn("this is the constructor");
}
}
componentDidUpdate(){
    
}
    render(){
        console.log("this is the render page")
return(


    <div><h1>this is the component did update page</h1></div>
)
    }
}
export default ComponentDidUpdate;