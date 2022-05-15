//react modules
import React from "react";
const parse = require('html-react-parser');

//render Info function
//props: name of the info, see if it's active, message content
function IntroInfo(props) {
    
    return (
        <div className={props.active ? "tab-pane fade show active" : "tab-pane fade"} id={props.id} role="tabpanel" aria-labelledby={`${props.id}-tab`}>
            {/*dangerouslySetInnerHTML={{__html:props.content}} */}
            <div className="container text-start"> 
                {parse(props.content)}
            </div>
        </div>
    );
}

//export
export default IntroInfo;