//react modules
import React from "react"
//react components
import Tag from "../../Tag";
// import ThreadModal from "./ThreadModal";

//render ThreadCard function
//props: title of the card, number of posts in the thread, if the card is complete for ongoing, route for the thread
function ThreadCard(props) {

    return (
        <div className="card">

            {
                props.route ?
                <div className="card-body">

                    {/* href={`/threads/${props.route}`} */}
                    <a href={`/threads/${props.route}`}>
                        <button type="button" to="" data-bs-toggle="modal" className="btn btn-link p-0" data-bs-target={`#${props.route}Modal`}>
                        
                            <h5 className="card-title text-decoration-underline">{props.title}</h5>

                        </button>
                    </a>
                
                    <hr />
                    <p className="card-text"><strong>Posts:</strong> {props.numOfPosts}</p>
                    
                    <div className="fs-6 mb-4">
                        <i class="bi bi-eye-fill me-1"></i> {props.views}
                    </div>
                    

                    <Tag complete={props.complete} completeTag={true} />

                    {/* <Tag completeTag={false} title={"LOCKED"} className="btn btn-primary mx-2"/> */}

                </div>

                :
                <div className="card-body">

                    <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                    </h5>
                
                    <hr />

                    <p class="card-text placeholder-glow">
                        <span class="placeholder col-7 me-2"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4 me-2"></span>
                        <span class="placeholder col-6"></span>

                        <button tabindex="-1" class="btn btn-primary disabled placeholder col-3 mt-4" aria-hidden="true"></button>
                    </p>
                
                </div>
            }

        </div>
        
    );
}

//export
export default ThreadCard;