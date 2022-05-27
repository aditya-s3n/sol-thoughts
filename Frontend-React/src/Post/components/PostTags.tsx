//react modules
import React from "react";
//react components
import Tag from "../../Tag";

//render PostTag
function PostTag() {
    return (

        <div className="container mt-2">
            <Tag completeTag={false} title={"Text"} />
            <Tag completeTag={false} title={"Video"} />
            <Tag completeTag={false} title={"Images"} />
            <Tag completeTag={false} title={"Dynamic"} />
        </div>

    );
}

//export
export default PostTag;