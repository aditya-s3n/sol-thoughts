//react modules
import React from "react";
//import StringToJSX from "../StringToJSX";

//render Test code
function Test() {
    
    
    
    return (
        <div>
            
            <p>Google Cloud allows you to have a scheduler that sends a request to a function to run when you want it to using <a href="https://en.wikipedia.org/wiki/Cron">CRON.</a></p>

            <img src="https://github.com/aditya-s3n/sun-thoughts-imgs/blob/main/Tweet%20Me%20a%20Universe/google-cloud-scheduler.png?raw=true" alt="google-cloud-scheduler" height="459.538" width="450"/>

            <p>Luckily for me, the scheduling job service that Google Cloud offers doesn’t require any payment until you create more than 3 jobs. I only need one so this will be good.</p>

            <p>After that I just made a Google Cloud Function that runs the code once it receives a ping from the scheduler. That's as easy as just uploading my existing node.js files as they have all the code working and ready-to-go.</p>

            <p>Now everyday the bot will tweet a new APOD image at 7am EST, I may add more data like the Mars Rover Pictures but for now this project is done.</p>

            <a href="https://twitter.com/AdityaS3n">Follow me on Twitter to see the bot.</a>
        </div>  
    );
}

//export
export default Test;