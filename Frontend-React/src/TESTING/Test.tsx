//react modules
import React from "react";
//import StringToJSX from "../StringToJSX";

//render Test code
function Test() {
    
    
    
    return (
        <div>
            
            <p>For the deployment I used Firebase, specifically firebase hosting.</p>

            <p>I wanted to deploy the whole firebase full-stack (front, and backend) through firebase, but I realized that firebase functions require a credit-card to be able to use, after like 3 hours of work. SO that was fun, and I felt really dumb LOL.</p>

            <p>I decided to use firebase, only for the front-end. So I would run and build the React app to be run on firebase hosting, while I set up the back-end express server on another platform. That platform was <a href="https://www.heroku.com/">Heroku</a>. Heroku is easy to use and efficient in many back-end services, so I was the perfect place from my back-end server to be and set up to get requests from my front-end website.</p>

            <p>Though if you ever used Heroku on the free tier, you’ll realize that Heroku to conserve space puts unused free apps “on sleep” that requires to be woken up, which takes around 4 seconds, to send and receive data. 4 seconds to wake up is waay too much time that anyone would wait for a website to load. Though if your heroku app gets a request within 20 - 30 minutes the app will stay awake. So if you use services like <a href="https://kaffeine.herokuapp.com/">kaffeine.herokuapp.com</a> your heroku app will stay awake indefinitely.</p>

            <p>But do you using heroku now I have 2 domains for 1 website, a back-end and front-end</p>

            <p><strong>Front-end:</strong> <a href="https://sol-thoughts.web.app">https://sol-thoughts.web.app</a></p>
            <p><strong>Back-end API:</strong> <a href="https://sol-thoughts-backend.herokuapp.com/">https://sol-thoughts-backend.herokuapp.com/</a></p>
        </div>  
    );
}

//export
export default Test;