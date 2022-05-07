//node modules
const express = require("express");
const cors = require("cors");

//express configs
const app = express();
app.use(cors()); //set up CORS middleware
const port = 3001;

/********************** Routing **********************/
// route (/)
app.get("/", (req, res) => {
    res.json({page: "Home"}); //send JSON data on what page to render
});

// route (/threads)
app.get("/threads", (req, res) => {
    res.json({page: "Thread"}); //send JSON information on what page to render
});

//route (/posts/:postID)
// app.get("/posts/:postID", (req, res) => {
//     res.json({})
// });


/********************** Port Connection **********************/
app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});