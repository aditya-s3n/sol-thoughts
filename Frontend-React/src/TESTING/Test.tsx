//react modules
import React, {useState} from "react";
import ReactDOMServer from "react-dom/server"
import StringToJSX from "../StringToJSX";

//render Test code
function Test() {
    const button = "pfp";
    const action = "showImageBtn";
    const [showImage, setShowImage] = useState(false);

    const scriptID = [
        {}
    ]
    let content = `<div className="text-center">

    <h3>Introduction</h3>
    <hr />

    <p>Aditya is my name.</p>
    <br />
    <p>This is my personal blog website, where I just post anything from projects that I’m doing to me just talking about my opinion on certain subjects, rants you might call it. I’ll make an effort to remain transparent in everything I do, as trust is a two-way relationship, but no promises :) LOL. I mean it’s like the Japanese proverb, “The first face, you show to the world. The second face, you show to your close friends, and your family. The third face, you never show anyone,” and technology, especially social media, allows a person to show their first face to the world.</p>

    <br />
    <p>Though you can trust me :)</p>
    
    <img id="pfp" height="150" width="150" src="https://thumbor.forbes.com/thumbor/200x200/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401" alt="pfp" />
    

    <p>^ that's me</p>

    <br />
    <p>Maybe I’ll live to regret what I post here, people always did tell me to be careful what you post on the internet as it stays there forever and they are not wrong, but with the advent of social media that advice is barely followed. So screw it I guess.</p>

    <br />
    <p>I hope non-video content and media doesn’t bore people too much.</p>

    <br />
    <p>Browse to your heart's content :)</p>

</div>`
    
    let element = ReactDOMServer.renderToStaticMarkup(content)
    
    return (
        // ReactDOMServer.renderToReadableStream(element)
        // <div dangerouslySetInnerHTML={{ __html: element }} ></div>
        <StringToJSX content={content} />
        // element
    );
}

//export
export default Test;