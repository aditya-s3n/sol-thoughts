//react modules
import React, {useEffect, useState, useRef} from "react";
//react components
import Post from "./Post/Post";
import Home from "./Home/Home";
import Thread from "./Thread/Thread";
import Page404 from "./Page404";
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
    //reference the thread Data to render (thread: thread page, post: post page, topThreads: home page)
    const threadDataReference = useRef(null);

    //receive what page to render
    useEffect(() => {
        //fetch the page to render
        fetch(`${domainName}${pathName}`)
            .then(response => response.json()) //convert JSON to JS objection
            .then(data => {
                //check if page is thread page
                if (data.page === "Thread") {
                    threadDataReference.thread = data.threadData;
                }
                //check if page is home page
                else if (data.page === "Home") {
                    threadDataReference.topThreads = data.topThreads;
                }
                //chck if page is post page
                else if (data.page === "Post") {
                    threadDataReference.post = data.threadData;
                }
                setPage(data.page); //set up which page to render
            });
    }, [pathName]);

    //returns the Page to render
    switch (page) {
        case "Home": //home page
            return <Home threadData={threadDataReference.topThreads} />
            
        case "Thread": //thread page
            return <Thread threadData={threadDataReference.thread} />    

        case "Post": //post page
            return <Post threadData={threadDataReference.post} />  

        case "404": //404 page
            return <Page404 />
            
        case "Test": //testing page (FOR DEBUGGING ONLY)
            return <Test />
        
        default: //reset
            return;
            
    }
}

//export
export default App;