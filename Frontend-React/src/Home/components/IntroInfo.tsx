//react modules
import React from "react";

//render Info function
//props: name of the info, see if it's active, message content
function IntroInfo(props) {
    console.log(props.content);
    return (
        <div className={props.active ? "tab-pane fade show active" : "tab-pane fade"} id={props.name} role="tabpanel" aria-labelledby={`${props.name}-tab`}>
            <div dangerouslySetInnerHTML={{__html:props.content}}></div>
        </div>
    );
}

//export
export default IntroInfo;