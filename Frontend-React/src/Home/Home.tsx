//import react modules
import React from "react";
//react components
import Header from "../Header";
import Title from "../Title";
import Intro from "./components/Intro";
import TopThreads from "./components/TopThreads";
import Footer from "../Footer";
//JS modules

//render HOME function
function Home() {
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

            <TopThreads />

            <Footer />
            
        </div>
    );
}

//export
export default Home;