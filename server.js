//node modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//express configs
const app = express();
app.use(cors()); //set up CORS middleware
const port = 3001;
//mongoose configs
mongoose.connect("mongodb://localhost:27017/sunDB");

/********************** MongoDB (Database) **********************/
//create model + collection


/********************** Routing **********************/
// route (/)
app.get("/", (req, res) => {
    res.json({page: "Home"}); //send JSON data on what page to render
});

// route (/threads)
app.get("/threads", (req, res) => {
    res.json({page: "Thread"}); //send JSON information on what page to render
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