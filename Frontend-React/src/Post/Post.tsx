//react modules
import React, {useState} from "react";
//react components
import Header from "../Header";
import Footer from "../Footer";
import Title from "../Title";
import Tag from "../Tag";
import PostContent from "./components/PostContent";
import PostTag from "./components/PostTags";
import PostTitle from "./components/PostTitle";

//render Post function
//props: thread data with all the posts [object]
function Post(props) {
    //create state for which post to render
    const [postInfo, setPostInfo] = useState(props.threadData.posts[0]); //get the first post from the thread data object

    return (
        <div>
            
            <Header />
            
            <Title title={props.threadData.name} center={false} />

            

            
            <div className="container">

                <div className="row">

                    <div className="col">
                        {/* option menu */}
                        <div className="ms-auto">

                            <select className="form-select form-select-lg" aria-label="Default select example" id="post-selector"
                            onChange={event => {
                                //set the new option value to post info
                                return setPostInfo(props.threadData.posts[event.target.value]);
                            }}>

                                {
                                    //make all the post titles an option to switch to
                                    props.threadData.posts.map((value, index) => {
                                        return <option value={index}>{value.title}</option>
                                    })
                                }
                        
                            </select>

                        </div>
                    
                    </div>
                    
                    <div className="col ms-auto">
                        <Tag complete={props.threadData.complete} completeTag={true} />
                    </div>
                    
                    
                </div>
                <hr />
            </div>

            
            
            <div className=" container">

                <div className="row">
                    
                    <div className="col my-2">
                        <PostTitle title={postInfo.title} />
                    </div>

                    <div className="col my-1 text-end">
                        <PostTag tags={postInfo.contentTag} />
                    </div>

                </div>
                
            </div>
            

            <PostContent postContent={postInfo.content}/>

            <Footer />

        </div>
    );
}

//export
export default Post;