//react modules
import React from "react"
//react components
import Tag from "../../Tag";

//render ThreadCard function
//props: title of the card, number of posts in the thread, if the card is complete for ongoing, route for the thread
function ThreadCard(props) {
    
    return (

        <div className="card">

            <div className="card-body">

                <a href={props.route}>
                    <h5 className="card-title text-decoration-underline">{props.title}</h5>
                </a>
                <hr />
                <p className="card-text"><strong>Posts:</strong> {props.numOfPosts}</p>
                
                <div className="fs-6 mb-4">
                    <i class="bi bi-eye-fill me-1"></i> {props.views}
                </div>
                

                <Tag complete={props.complete} completeTag={true} />

            </div>

        </div>
        
    );
}

//export
export default ThreadCard;