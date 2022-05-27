//import react modules
import React from "react";
//react components
import Header from "../Header";
import Title from "../Title";
import Intro from "./components/Intro";
import TopThreads from "./components/TopThreads";
import Footer from "../Footer";


//render HOME function
//props: the 3 top threads and information
function Home(props) {


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

            <TopThreads threadArray={props.threadData}/>

            <Footer />
            
        </div>
    );
}

//export
export default Home;