//import react modules
import React, {useEffect, useRef} from "react";
//react components
import Header from "../Header";
import Title from "../Title";
import Intro from "./components/Intro";
import TopThreads from "./components/TopThreads";
import Footer from "../Footer";
//JS modules
import domainName from "../domainName.js"

async function getTopThreads() {
    let response = await fetch(`${domainName}/topThreads`);
    let JSONresponse = await response.json();
    return JSONresponse;
}

//render HOME function
function Home() {
    //top 3 threads variable
    const threadName = useRef([]);
    const threadRoute = useRef([]);
    //get the top 3 threads
    useEffect(() => {
        let topThreads = getTopThreads();
        topThreads.then(result => {
            threadName.current = result.name;
            threadRoute.current = result.route;
        });
    });

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

            <TopThreads name={threadName} route={threadRoute.current}/>

            <Footer />
            
        </div>
    );
}

//export
export default Home;