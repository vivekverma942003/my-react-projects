import React from 'react';


class Constructor extends React.Component{
    constructor(){
        super();
        this.state={
            data:"vivek",
            branch:"btech"
        }
    }
    render(){
        return(
            
            <div>
            <h1> this is the text box for the constructor for {this.state.branch}  {this.state.data}</h1>
            </div>
    )
}
}
export default Constructor;