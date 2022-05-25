//react modules
import React from "react";

//render ThreadTag function
//props: if the thread is complete, if it's a complete or name tag, the title of the tag
function Tag(props) {
    return (
        <button type="button" class={props.completeTag ? props.complete ? "btn btn-primary thread-state" : "btn btn-success" : "btn btn-secondary"} disabled>
            {props.completeTag ? 
                props.complete ? "Complete" : "Ongoing"
            : props.title}
        </button>
    );
}

//export
export default Tag;