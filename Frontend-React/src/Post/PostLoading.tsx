//react modules
import React from "react";
//react components
import Header from "../Header";
import Footer from "../Footer";
//css
import "./PostLoading.css"

//render function
function PostLoading() {
    return (
        <div>
            
            <Header />
            
            <div className="container mt-2 placeholder-glow">
                <span class="placeholder col-6 placeholder-lg title-placeholder"></span>
            
                <hr className="me-auto"/>
            </div>
            
            
            
            <div className="container placeholder-glow">

                <button tabindex="-1" class="btn btn-primary btn-lg disabled placeholder col-2" aria-hidden="true"></button>
                
                <hr />
            </div>

            
            
            <div className="placeholder-glow container">

                <div className="row">
                    
                    <div className="col my-2">
                        <span class="placeholder col-12 placeholder-lg title-post-placeholder"></span>
                    </div>

                    <div className="col my-1 text-end">
                        <button tabindex="-1" class="btn btn-primary disabled placeholder col-2" aria-hidden="true"></button>
                    </div>

                </div>
                
            </div>
            
            <div className="container mt-5">
                <p class="card-text placeholder-glow">
                    <span class="placeholder col-7 me-2"></span>
                    <span class="placeholder col-4"></span>
                    <span class="placeholder col-4 me-2"></span>
                    <span class="placeholder col-6"></span>
                    <span class="placeholder col-8 "></span>
                </p>
            </div>
            <Footer />

        </div>
    );
}

//export
export default PostLoading;