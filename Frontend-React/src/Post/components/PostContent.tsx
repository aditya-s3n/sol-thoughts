//react modules
import React from "react";
import StringToJSX from "../../StringToJSX";

//render the PostContent
//props: the content as a string
function PostContent(props) {
    return (
        <div>
            <StringToJSX content={props.postContent} />
        </div>
    );
}

//export
export default PostContent