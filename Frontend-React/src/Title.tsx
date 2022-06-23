//react module
import React from "react";

//render Title function
//props: title on what to render, center if the center the text
function Title(props) {
    return (
        <div className={props.center ? "container mt-2 text-center" : "container mt-2"} id="Title">
            <h2 className="display-4 my-4">{props.title}</h2>
            <hr className={props.center ? "mx-auto" : "me-auto"}/>
        </div>
    );
}

//export
export default Title;