//react modules
import React from "react"
//react components
import Tag from "../../Tag";
import ThreadModal from "./ThreadModal";

//render ThreadCard function
//props: title of the card, number of posts in the thread, if the card is complete for ongoing, route for the thread
function ThreadCard(props) {

    return (

        <div className="card">

            <div className="card-body">

            {/* href={`/threads/${props.route}`} */}
                <button type="button" data-bs-toggle="modal" className="btn btn-link p-0" data-bs-target={`#${props.route}Modal`}>
                
                    <h5 className="card-title text-decoration-underline">{props.title}</h5>

                </button>
                
                <hr />
                <p className="card-text"><strong>Posts:</strong> {props.numOfPosts}</p>
                
                <div className="fs-6 mb-4">
                    <i class="bi bi-eye-fill me-1"></i> {props.views}
                </div>
                

                <Tag complete={props.complete} completeTag={true} />

                <Tag completeTag={false} title={"LOCKED"} className="btn btn-primary mx-2"/>

            </div>
            

            <ThreadModal title={props.title} route={props.route} />

        </div>
        
    );
}

//export
export default ThreadCard;