//react modules
import React from "react";
//react components
import Tag from "../../Tag";

//render PostTag
//props: array of tags to render
function PostTag(props) {
    return (

        <div className="container mt-2">

            {
                //render each of the tags
                props.tags.map(value => {
                    return <Tag completeTag={false} title={value} />
                })
            }
        
        </div>

    );
}

//export
export default PostTag;