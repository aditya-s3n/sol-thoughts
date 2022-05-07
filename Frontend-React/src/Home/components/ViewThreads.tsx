//react modules
import React from "react";

//render View Threads Button function
function ViewThreads() {
    return (
        <a href="/threads">
            <button type="button" className="btn btn-lg btn-outline-dark my-4">View Threads</button>
        </a>
    );
}

//export
export default ViewThreads;