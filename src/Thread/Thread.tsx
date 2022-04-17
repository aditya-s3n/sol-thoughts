//react modules
import React from "react";
//react components
import Header from "../Header";
import Title from "../Title";

//DEBUGGING TAKE OUT
import ThreadRow from "./components/ThreadRow";

import Footer from "../Footer";

//render Thread function
function Thread() {
    //all the threads in nested JS objects in arrays
    let threads = [
        [
            {
                keyID: 1,
                name: "Example 1",
                posts: 3,
                complete: true,
                route: "/example-1"
            },
            {
                keyID: 2,
                name: "Example 2",
                posts: 3,
                complete: false,
                route: "/example-2"
            },
            {
                keyID: 3,
                name: "Example 3",
                posts: 4,
                complete: true,
                route: "/example-3"
            }
        ],
        [
            {
                keyID: 4,
                name: "Example 4",
                posts: 3,
                complete: true,
                route: "/example-4"
            },
            {
                keyID: 5,
                name: "Example 5",
                posts: 3,
                complete: false,
                route: "/example-5"
            },
            {
                keyID: 6,
                name: "Example 6",
                posts: 4,
                complete: true,
                route: "/example-6"
            }
        ],
    ];

    //Header: the navbar and title of the website
    //Title: title component
    //
    //Footer: the bottom of the website
    return (
        <div>

            <Header />
            
            <Title title="Threads" center={false}/>

            {threads.map((value) => {
                return <ThreadRow array={value}/>
            })} 

            <Footer />

        </div>
    );
}

//export
export default Thread;

/* 

*/