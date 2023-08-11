import React from "react";
import  ReactDOM  from "react-dom";
import UserSearch from "./Props/userSearch";


const App = () =>{
    return <div> 
        {<UserSearch />}
    </div>
}

ReactDOM.render(<App />, document.querySelector("#root"))