//react modules
import React from "react";

//render Link function
//props: name of the Link + content, see if it's active
function IntroLink(props) {
    return (
        <li className="nav-item" role="presentation">
            <button className={props.active ? "nav-link active" : "nav-link"} id={`${props.name}-tab`} data-bs-toggle="tab" data-bs-target={`#${props.name}`} type="button" role="tab" aria-controls={props.name} aria-selected="true">{props.name}</button>
        </li>
    );
}

//export
export default IntroLink;