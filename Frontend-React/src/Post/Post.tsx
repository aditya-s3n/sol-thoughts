//react modules
import React from "react";
//react components
import Header from "../Header";
import Footer from "../Footer";
import Title from "../Title";
import PostInput from "./components/PostInput";
import Tag from "../Tag";

//render Post function
function Post() {
    return (
        <div>
            
            <Header />

            <div class="container">

                <div class="row">

                    <div class="col">
                        <PostInput />
                    </div>

                    <div class="col ms-auto mt-5">
                        <Tag complete={true} completeTag={false} title={"Complete"}/>
                    </div>

                </div>

            </div>

            <Title title="Post Title" center={false} />

            <Footer />

        </div>
    );
}

//export
export default Post;