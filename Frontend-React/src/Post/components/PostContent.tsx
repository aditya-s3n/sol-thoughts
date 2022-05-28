//react modules
import React from "react";
import StringToJSX from "../../StringToJSX";

//render the PostContent
//props: the content as a string
function PostContent(props) {
    return (
        <div className="container text-start my-5">
            <StringToJSX content={props.postContent} />
        </div>
    );
}

//export
export default PostContent