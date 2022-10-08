//react modules
import React, { useEffect, useState, useRef } from "react";
//react components
import Post from "./Post/Post";
import Home from "./Home/Home";
import Thread from "./Thread/Thread";
import Page404 from "./Page404";
//JS modules
import domainName from "./utils/domainName.js";
import { storePageVisitsGA } from "./utils/googleAnalytics";
//TESTING
import Test from "./TESTING/Test";
import PostLoading from "./Post/PostLoading";

//function to get which page to render on client
function renderPage(pathName) {
    //return which page to render in client
    if (pathName === "/") { //home page
        return "Home";
    } else { //other pages

        //split it into array
        const paths = pathName.split("/");
        paths.shift();

        //threads page
        if (paths.length === 1 && (paths[0] === "threads" || paths[0] === "posts")) {
            return "Thread";
        } 
        //posts pages
        else if (paths[0] === "threads" || paths[0] === "posts") {
            return "Post";
        } 
        //404 Page
        else {
            return "404";
        }
    }
}


//send App render function
function App() {
    //get and save the pathname
    let pathName = window.location.pathname;
    
    //state to render page type
    const [page, setPage] = useState(renderPage(pathName));
    //state to see if you got data
    const [gotData, setGotData] = useState(false);
    //reference the thread Data to render (thread: thread page, post: post page, topThreads: home page)
    const threadDataReference = useRef(null);

    console.log(gotData);
    //receive what page to render
    useEffect(() => {
        //fetch the page to render
        fetch(`${domainName}${pathName}`)
                .then(response => response.json()) //convert JSON to JS objection
                .then(data => {
                    console.log(data);
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
                    
                    setGotData(true); //force a re-render
                    
                    //send page data to GA
                    storePageVisitsGA();
                    
            });
            
    }, [pathName]);

    //returns the Page to render
    switch (page) {
        case "Home": //home page
            return <Home threadData={threadDataReference.topThreads} />
            
        case "Thread": //thread page
            return <Thread threadData={threadDataReference.thread} />    

        case "Post": //post page
            if (gotData) {
                return <Post threadData={threadDataReference.post} />  
            } else {
                return <PostLoading />;
            }
            

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