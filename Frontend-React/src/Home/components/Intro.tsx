//react modules
import React from "react";
//react components
import IntroLink from "./IntroLink";
import IntroInfo from "./IntroInfo";
//JS module
import introContent from "./content.js";

//Intro function render
function Intro() {


    return (
        <div style={{"width": "50%"}} className="mx-auto">

            <ul className="nav nav-tabs justify-content-center my-5" id="myTab" role="tablist">

                <IntroLink name="Home" active={true} />

                <IntroLink name="As" active={false} />

                <IntroLink name="Poke" active={false} />

            </ul>
                
            <div className="tab-content center-text mx-auto" id="myTabContent">
                
                <IntroInfo name="Home" active={true} content={introContent.home}/>
                
                <IntroInfo name="As" active={false} content="This is the As content" />
                
                <IntroInfo name="Poke" active={false} content="This is the Poke content" />

            </div>

        </div>
    );
}

//export
export default Intro