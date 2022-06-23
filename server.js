//node modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//start .env reading
require('dotenv').config();

//express configs
const app = express();
app.use(cors()); //set up CORS middleware
//mongoose configs
const mongo_URI = process.env.MONGO_URI; //get the URI to the mongo database from .env file
const mongo_local = "mongodb://localhost:27017/sunDB"; //local connection to the mongoDB server
mongoose.connect(mongo_URI); //connect to MongoDB Atlas


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
app.listen(process.env.PORT, () => {
    console.log(`Server Started on Port ${process.env.PORT}`);
});