//react module
import React from "react";

//render Title function
//props: title on what to render
function Title(props) {
    return (
        <div class="container">
            <h2>{props.title}</h2>
            <hr style={{"width": "50%"}}/>
        </div>
    );
}

//export
export default Title;