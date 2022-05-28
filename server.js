//node modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//start .env reading
require('dotenv').config();

//express configs
const app = express();
app.use(cors()); //set up CORS middleware
const port = 3001;
//mongoose configs
const mongo_URI = process.env.MONGO_URI; //get the URI to the mongo database from .env file
mongoose.connect("mongodb://localhost:27017/sunDB"); //TODO change to Atlas URI from .env


/********************** MongoDB (Database) **********************/
//create MongoDB JS Object Schema 
const threadSchema = new mongoose.Schema({ //thread schema
    name: String,
    route: String,
    postNum: Number,
    complete: Boolean,
    views: Number,
    posts: Array
});

//create model + collection
const Thread = mongoose.model("Thread", threadSchema);

//get all the threads, and put into array
async function findAllThreads() {
    //find all the documents
    const threadDocuments = await Thread.find({}).exec();
    //return in array from
    return threadDocuments;
}
//find certain thread with posts
async function findThread(route) {
    //find document from route
    const thread = await Thread.findOne({route: route}).exec();
    //return document object
    return thread;
}
//find the top 3 threads by views
async function findTopThreads() {
    //find all the documents
    const threads = await Thread.find({}).exec();
    
    //array to get top 3 thread
    threads.sort((index1, index2) => {
        return index1.views - index2.views //sort by the views
    });
    //reverse the array
    threads.reverse();

    //return the top 3 threads in array
    return [threads[0], threads[1], threads[2]];
}
//add 1 to views of a specific thread
async function addViewToThread(route) {
    //get the thread document
    const thread = await findThread(route);
    //add one to views
    const updatedViews = thread.views + 1;

    //update the thread document
    const response = await Thread.updateOne({ route: route }, { $set: { views: updatedViews } });

    //check for erros
    if (response.acknowledged === false) {
        console.log(`Couldn't add view to ${route}`);
    }
}

//insert a document thread
async function insertThread(name, route, postNum, complete, posts) {
    const newThread = new Thread({
        name: name,
        route: route,
        postNum: postNum,
        complete: complete,
        views: posts.length,
        posts: posts
    });

    await newThread.save().then(() => console.log("Added new Thread to Database"));
}
//insert new post into exisitng thread
async function insertPostToThread(postObject, threadRoute) {
    //find the original posts array
    const originalThread = await findThread(threadRoute);

    const originalPosts = originalThread.posts;
    //insert new post with ES6 spread operator
    const updatedPosts = [...originalPosts, postObject]; //create the updated posts array
    const updatePostsNum = originalThread.postNum + 1; //create updated Posts Num

    //update the thread with the new posts
    const response = await Thread.updateOne({route: threadRoute}, { $set: { posts: updatedPosts, postNum: updatePostsNum } });
    
    //check for errors
    if (response.acknowledged === true) {
        console.log(`Added Post to ${threadRoute}`);
    }
    else {
        console.log("Something went wrong");
    }
}

// post2 = {
//     title: "Example Post 1",
//     content: `<h3>Introduction</h3>
//     <hr />

//     <p>Aditya is my name.</p>
//     <br />
//     <p>This is my personal blog website, where I just post anything from projects that I’m doing to me just talking about my opinion on certain subjects, rants you might call it. I’ll make an effort to remain transparent in everything I do, as trust is a two-way relationship, but no promises :) LOL. I mean it’s like the Japanese proverb, “The first face, you show to the world. The second face, you show to your close friends, and your family. The third face, you never show anyone,” and technology, especially social media, allows a person to show their first face to the world.</p>

//     <br />
//     <p>Though you can trust me :)</p>
    
//     <img id="pfp" height="150" width="150" src="https://thumbor.forbes.com/thumbor/200x200/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401" alt="pfp" />
    

//     <p>^ that's me</p>

//     <br />
//     <p>Maybe I’ll live to regret what I post here, people always did tell me to be careful what you post on the internet as it stays there forever and they are not wrong, but with the advent of social media that advice is barely followed. So screw it I guess.</p>

//     <br />
//     <p>I hope non-video content and media doesn’t bore people too much.</p>

//     <br />
//     <p>Browse to your heart's content :)</p>`,
//     contentTag: ["Text", "Images"]
// }
// insertPostToThread(post2, "thread-3");
/********************** Routing **********************/
// route (/)
app.get("/", (req, res) => {
    const threadData = findTopThreads();
    
    threadData.then(value => { //resolve promise
        res.json({ page: "Home", topThreads: value }); //send JSON data on what page to render
    });
    
});

// route (/threads)
app.get("/threads", (req, res) => {
    const threads = findAllThreads(); //get all the threads in an array

    //resolve the promise
    threads.then(result => { 
        res.json({page: "Thread", threadData: result}); //send JSON information on what page to render
    });
});

//route (/post)
app.get("/posts", (req, res) => {
    res.redirect("/threads"); //posts page is the same threads page
});

//route (/threads/:threadRoute)
app.get("/threads/:threadRoute", (req, res) => {
    let threadID = req.params.threadRoute; //get what thread to render

    const foundThread = findThread(threadID); //get thread document

    foundThread //resolve promise
        .then(value => {
            //check if found thread
            if (value === null) {
                res.json({page: "404"}); //send 404 page when can't find thread
            }
            else {
                addViewToThread(threadID); //add one view to thread
            res.json({page: "Post", threadData: value}); //send data to render post page with all the posts
            }
        })  
        .catch(err => {
            res.json({page: "404"}); //render the 404 page when can't find any thread
        });
});

/*** Testing HTML Pages ***/
app.route("/test")
    .get((req, res) => {
        res.json({page: "Test"});
    });

//route 404
app.get("*", (req, res) => { //any route, KEEP LAST
    res.status(404).json({page: "404"}); //send 404 page to render if 404 status code
});

/********************** Port Connection **********************/
app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});