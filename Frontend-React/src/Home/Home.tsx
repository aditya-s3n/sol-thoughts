//import react modules
import React, {useEffect, useState} from "react";
//react components
import Header from "../Header";
import Title from "../Title";
import Intro from "./components/Intro";
import TopThreads from "./components/TopThreads";
import Footer from "../Footer";
//JS modules
import domainName from "../domainName.js"


//render HOME function
function Home() {
    //top 3 threads variable
    const [threadName, setThreadName] = useState([]);
    const [threadRoute, setThreadRoute] = useState([]);
    
    //get the top 3 threads TODO
    async function setTopThreads() {
        let response = await fetch(`${domainName}/topThreads`); //get the data from the server URL
        let data = await response.json(); //make data readable

        //set the state of both the thread name and route
        setThreadName(data.name);
        setThreadRoute(data.route);
    }

    //get the top threads data, and run only once
    useEffect(() => {
        setTopThreads();
    }, []); //run only once

    //Header: the navbar and title of the website
    //Title: title component
    //Intro: the intro information about my website, who am I
    //TopThread: top threads component + view threads button
    //Footer: the bottom of the website
    return (
        <div>
            
            <Header />

            <Title title={`Welcome!`} center={true}/>

            <Intro />

            <TopThreads name={threadName} route={threadRoute}/>

            <Footer />
            
        </div>
    );
}

//export
export default Home;