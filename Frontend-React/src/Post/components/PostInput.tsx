//react modules
import React from "react";

//render PostInput function
function PostInput() {
    return (
        <div class="ms-auto mt-5">

            <select class="form-select form-select-lg" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

        </div>
    );
}

//export
export default PostInput;