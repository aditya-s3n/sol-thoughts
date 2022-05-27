//react modules
import React, {useState, useEffect} from "react";
//react components
import Header from "../Header";
import Footer from "../Footer";
import Title from "../Title";
import Tag from "../Tag";
import PostContent from "./components/PostContent";
import PostTag from "./components/PostTags";

//render Post function
//props: thread data with all the posts [object]
function Post(props) {
    //create state for which post to render
    const [post, setPost] = useState(null);

    return (
        <div>
            
            <Header />

            <div className="container">

                <div className="row">

                    <div className="col">
                        {/* option menu */}
                        <div className="ms-auto mt-5">

                            <select className="form-select form-select-lg" aria-label="Default select example">
                                <option value="0">Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                        </div>
                    
                    </div>

                    <div className="col ms-auto mt-5">
                        <Tag complete={true} completeTag={true} />
                    </div>

                </div>

            </div>

            <Title title="Post Title" center={false} />

            <PostTag />

            {/* <PostContent /> */}

            <Footer />

        </div>
    );
}

//export
export default Post;