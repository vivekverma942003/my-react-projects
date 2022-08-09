import React from "react";

class ComponentDidMount extends React.Component{

    constructor(){
        super();
        this.state={
            name:"vivek kumar verma"
        }

    }
    componentDidMount(){
        console.warn("this is a ComponentDidMount");
    }

render(){

        console.warn("this is a render");

    return(
        <div>
            <h1>Componentdid ComponentDidMount{this.state.name}</h1>
            <button onClick={()=>{this.setState({name:"vishal"})}}>click to render update</button>
        </div>

    )
}   
}
export default ComponentDidMount;