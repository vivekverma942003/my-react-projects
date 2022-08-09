import React from 'react';
class Render extends React.Component{

constructor(){
    super();
    this.state={

        email:"vivekverma942003@gmsil.com"
    }
}
    render(){

            console.warn("render method",this.state.email);
        return(
            <div>
                <h2>this is the text for the render method{this.state.email}    </h2>
                <button onClick={()=>this.setState({email:"atulreso454@gmail.com"}) }>click to update</button>
            </div>
        )
    }
}
export default Render;