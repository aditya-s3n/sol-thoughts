//react modules
import React from "react";
//react components
import ThreadCard from "./ThreadCard";

//render ThreadRow function
//props: the array with 3 posts to render
function ThreadRow(props) {

    return (
        <div className="container mx-auto">
        
            <div className="row row-cols-3">
                    
                {
                props.array.map((value) => {
                    return (
                        <div className="col my-4">
                            <ThreadCard title={value.name} numOfPosts={value.postNum} complete={value.complete} key={value._id} route={value.route} views={value.views}/>
                        </div>
                    );
                })
                }

            </div>

        </div>

    );
}

//export
export default ThreadRow;