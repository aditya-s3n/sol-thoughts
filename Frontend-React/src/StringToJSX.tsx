//react modules
import React from "react";
import parse from 'html-react-parser';


//render StringToJSX function
//props: html content, scriptID, function to do
function StringToJSX(props) {
    
    return (
        <div>
           {parse(props.content)}
        </div>
    );
}

//export
export default StringToJSX;