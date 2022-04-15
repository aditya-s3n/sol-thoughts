//react modules
import React from "react";
//react components
import IntroLink from "./IntroLink";
import IntroInfo from "./IntroInfo";

//Intro function render
function Intro() {
    return (
        <div>

            <ul class="nav nav-tabs justify-content-center my-5" id="myTab" role="tablist">

                <IntroLink name="Home" active={true} />

                <IntroLink name="As" active={false} />

                <IntroLink name="Poke" active={false} />

            </ul>
                
            <div class="tab-content center-text" id="myTabContent">
                
                <IntroInfo name="Home" active={true} content="This is the home content" />
                
                <IntroInfo name="As" active={false} content="This is the As content" />
                
                <IntroInfo name="Poke" active={false} content="This is the Poke content" />

            </div>

        </div>
    );
}

//export
export default Intro