//react modules
import React from "react";
//react components
import IntroLink from "./IntroLink";
import IntroInfo from "./IntroInfo";
//JS module
import introContent from "./content.js"; //get the content to render in the home page

//Intro function render
function Intro() {
    //map the introContent data into make all the IntroLinks and IntroInfo components
    return (
        <div style={{"width": "50%"}} className="mx-auto">

            <ul className="nav nav-tabs justify-content-center my-5" id="myTab" role="tablist">

                {
                //map all the values from the object to IntroLink
                introContent.map((objectValue) => {
                    return <IntroLink name={objectValue.name} active={objectValue.active} id={objectValue.id} />
                })
                }

            </ul>
                
            <div className="tab-content center-text mx-auto" id="myTabContent">

                {
                //map all the values from the object to IntroInfo
                introContent.map((objectValue) => {
                    return <IntroInfo name={objectValue.name} active={objectValue.active} id={objectValue.id} content={objectValue.content} scriptID={objectValue.scriptIDs} />
                })
                }

            </div>

        </div>
    );
}

//export
export default Intro