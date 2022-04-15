//react module
import React from "react";

//render Title function
//props: title on what to render
function Title(props) {
    return (
        <div className="container-fluid mt-2 center-text">
            <h2 className="display-4 my-4">{props.title}</h2>
            <hr style={{"width": "50%"}} className="mx-auto"/>
        </div>
    );
}

//export
export default Title;