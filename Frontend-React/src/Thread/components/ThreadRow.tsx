//react modules
import React from "react";
//react components
import ThreadCard from "./ThreadCard";

//render ThreadRow function
//props: the array with 3 posts to render
function ThreadRow(props) {
    return (
        <div className="row container mx-auto my-5">
                
            {props.array.map((value) => {
                return <ThreadCard title={value.name} numOfPosts={value.posts} complete={value.complete} key={value.keyID} route={value.route} />
            })}

        </div>

    );
}

//export
export default ThreadRow;