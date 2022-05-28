//react modules
import React, {useState, useRef} from "react";
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
    const [postInfo, setPostInfo] = useState(props.threadData.posts[0]); //get the first post from the thread data object

    return (
        <div>
            
            <Header />

            <div className="container">

                <div className="row">

                    <div className="col">
                        {/* option menu */}
                        <div className="ms-auto mt-5">

                            <select className="form-select form-select-lg" aria-label="Default select example">

                                {
                                    //make all the post titles an option to switch to
                                    props.threadData.posts.map((value, index) => {
                                        return <option value={index}>{value.title}</option>
                                    })
                                }
                        
                            </select>

                        </div>
                    
                    </div>

                    <div className="col ms-auto mt-5">
                        <Tag complete={props.threadData.complete} completeTag={true} />
                    </div>

                </div>

            </div>

            <Title title={postInfo.title} center={false} />

            <PostTag tags={postInfo.contentTag} />

            <PostContent postContent={postInfo.content}/>

            <Footer />

        </div>
    );
}

//export
export default Post;