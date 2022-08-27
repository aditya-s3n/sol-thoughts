//react-ga4
import ReactGA from "react-ga4";

//start storing analytics
ReactGA.initialize("G-M2DMGD04NG");

//store the page view on google analytics
function storePageVisitsGA() {
    //get and save the pathname
    let pathName = window.location.pathname;

    //send over the data to GA to store
    ReactGA.send({ hitType: "pageview", page: pathName });
}

//export
export { storePageVisitsGA };