import React from "react";

function UserData(props){



    return (
        <div>
            <h1>hello</h1>
            <button onClick={()=>props.data()}>click here to see the result</button>
        </div>
    )
}
export default UserData;