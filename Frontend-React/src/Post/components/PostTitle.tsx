//react modules
import React from "react";

//render the PostTitle function
//props: the title string to render
function PostTitle(props) {
    return (
        <h2 className="ms-auto">{props.title}</h2>
    );
}

//export
export default PostTitle;