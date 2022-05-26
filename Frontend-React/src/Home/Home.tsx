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
//props: the 3 top threads and information
function Home(props) {
    console.log(props);
    //top 3 threads variable
    const [threadData, setThreadData] = useState(props.threadData);



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

            <TopThreads threadArray={threadData}/>

            <Footer />
            
        </div>
    );
}

//export
export default Home;