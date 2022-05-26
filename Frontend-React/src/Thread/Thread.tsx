//react modules
import React from "react";
//react components
import Header from "../Header";
import Title from "../Title";
import ThreadRow from "./components/ThreadRow";
import Footer from "../Footer";


//render Thread function
//props: the thread data in array form
function Thread(props) {

    //Header: the navbar and title of the website
    //Title: title component
    //ThreadRow: the rows to render the thread cards in (rows and columns)
    //Footer: the bottom of the website
    return (
        <div>

            <Header />
            
            <Title title="Threads" center={false}/>

            <ThreadRow array={props.threadData} />

            <Footer />

        </div>
    );
}

//export
export default Thread;