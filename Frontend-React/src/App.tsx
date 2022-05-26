//react modules
import React, {useEffect, useState, useRef} from "react";
//react components
import Post from "./Post/Post";
import Home from "./Home/Home";
import Thread from "./Thread/Thread";
//JS modules
import domainName from "./domainName.js";
//TESTING
import Test from "./TESTING/Test";


//send App render function
function App() {
    //get and save the pathname
    let pathName = window.location.pathname;
    
    //state to render page type
    const [page, setPage] = useState(null);
    //reference the thread Data to render
    const threadDataReference = useRef(null);

    //receive what page to render
    useEffect(() => {
        //fetch the page to render
        fetch(`${domainName}${pathName}`)
            .then(response => response.json()) //convert JSON to JS objection
            .then(data => {
                //check if page is thread page
                if (data.page === "Thread") {
                    threadDataReference.current = data.threadData;
                }
                setPage(data.page); //set up which page to render
            });
    }, [pathName]);

    //returns the Page to render
    switch (page) {
        case "Home": //home page
            return <Home />
            
        case "Thread": //thread page
            return <Thread threadData={threadDataReference.current}/>    

        case "Post": //post page
            return <Post />  
            
        case "Test": //testing page (FOR DEBUGGING ONLY)
            return <Test />
        
        default: //reset
            return <Post />  
            
    }
}

//export
export default App;