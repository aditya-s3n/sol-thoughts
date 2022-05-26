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
    
    //array to get top 3 threads
    
    //return the top 3 threads in array
}
//add 1 to views of a certain thread
async function addViewToThread(route) {
    //get the thread document
    const thread = await findThread(route);
    //add one to views
    thread.then(result => {
        const updatedViews = result.views + 1;
    });
    //update the thread document
    await Thread.updateOne({ route: route }, { $set: { views: updatedViews }}, (err, res) => {
        //check for error
        if (err) {
            console.log(err);
        }
    });
}

//insert a document thread
async function insertThread(name, route, postNum, complete, posts) {
    const newThread = new Thread({
        name: name,
        route: route,
        postNum: postNum,
        complete: complete,
        views: 0,
        posts: posts
    });

    await newThread.save().then(() => console.log("Added new Thread to Database"));
}
//insert new post into exisitng thread
async function insertPostToThread(postObject, threadRoute) {
    //find the original posts array
    const originalThread = await findThread(threadRoute);
    const originalPosts = originalThread.posts; //get the posts

    //insert new post with ES6 spread operator
    const updatedPosts = [...originalPosts, postObject]; //create the updated posts array
    const updatePostsNum = originalPosts.postNum + 1; //create updated Posts Num
    await Thread.updateOne({route: threadRoute}, { $set: { posts: updatedPosts, postNum: updatePostsNum } }, (err, res) => { //update the thread posts
        if (err) { //check for error
            console.log(err);
        }
        else { //no error
            console.log(res);
        }
    });
}


/********************** Routing **********************/
// route (/)
app.get("/", (req, res) => {
    res.json({page: "Home"}); //send JSON data on what page to render
});

// route (/threads)
app.get("/threads", (req, res) => {
    const threads = findAllThreads(); //get all the threads in an array
    
    //resolve the promise
    threads.then(result => { 
        res.json({page: "Thread", threadData: result}); //send JSON information on what page to render
    });
});
//route (/topThreads)
app.get("/topThreads", (req, res) => {

    res.json({
        name: ["Thread 1", "Thread 2", "Thread 3"], 
        route: ["/thread1", "/thread2", "/thread3"]
    }); //send JSON of the 3 top threads on the website
});

//route (/post)
app.get("/posts", (req, res) => {
    res.redirect("/threads"); //posts page is the same threads page
});

//route (/threads/threadID
app.get("/threads/:threadID", (req, res) => {
    let threadID = req.params.threadID;
    
    res.json({});
});


/*** Testing HTML Pages ***/
app.route("/test")
    .get((req, res) => {
        res.json({page: "Test"});
    });


/********************** Port Connection **********************/
app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});