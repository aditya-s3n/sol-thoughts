//react modules
import React, {useEffect, useState} from "react";
//react components
import Post from "./Post/Post";
import Home from "./Home/Home";
import Thread from "./Thread/Thread";
//JS modules
import domainName from "./domainName.js";


//send App render function
function App() {
    //get and save the pathname
    let pathName = window.location.pathname;
    
    //state to render page type
    const [page, setPage] = useState(null);
    
    //receive what page to render
    useEffect(() => {
        //fetch the page to render
        fetch(`${domainName}${pathName}`)
            .then(response => response.json()) //convert JSON to JS objection
            .then(data => {
                setPage(data.page); //set up which page to render
            });
    });

    //returns the Page to render
    switch (page) {
        case "Home": //home page
            return <Home />
            
        case "Thread": //thread page
            return <Thread />    

        case "Post": //post page
            return <Post />    
        
        default: //reset
            break;
    }
}

//export
export default App;