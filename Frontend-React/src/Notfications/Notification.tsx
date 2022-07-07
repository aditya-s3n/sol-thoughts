//react modules
import React from "react";

//render function
function Notfication() {
    return (

        <div class="toast align-items-center text-bg-dark show fade bottom-0 end-0 position-fixed m-3" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#03EC06"/></svg>

                <strong class="me-auto">Notfication</strong>
                
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Follow me on <a href="https://twitter.com/AdityaS3n">Twitter</a>, to get the tweets from my bot!
            </div>
        </div>

        
    );
}

//export
export default Notfication;