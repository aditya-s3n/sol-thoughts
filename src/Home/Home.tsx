//import react modules
import React from "react";
//react components
import Header from "../Header";
import Title from "../Title";
import Intro from "./components/Intro";

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

            <Title title={"Welcome!"}/>

            <Intro />

        </div>
    );
}

//export
export default Home;