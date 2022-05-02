//react modules
import React from "react";

//render Info function
//props: name of the info, see if it's active, message content
function IntroInfo(props) {
    return (
        <div class={props.active ? "tab-pane fade show active" : "tab-pane fade"} id={props.name} role="tabpanel" aria-labelledby={`${props.name}-tab`}>
            <p>{props.content}</p>
        </div>
    );
}

//export
export default IntroInfo;