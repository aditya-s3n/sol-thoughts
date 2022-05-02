//react modules
import React from "react"
//react components
import Tag from "../../Tag";

//render ThreadCard function
//props: title of the card, number of posts in the thread, if the card is complete for ongoing, route for the thread
function ThreadCard(props) {
    console.log(props);
    return (
        <div className="col-sm-4">

            <div className="card">

                <div className="card-body">

                    <a href={props.route}>
                        <h5 className="card-title text-decoration-underline">{props.title}</h5>
                    </a>
                    <hr />
                    <p className="card-text"><strong>Posts:</strong> {props.numOfPosts}</p>
                    <Tag complete={props.complete} />

                </div>

            </div>

        </div>
    );
}

//export
export default ThreadCard;